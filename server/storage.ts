import mongoose from 'mongoose';
import { users, type User, type InsertUser, userProgress, type UserProgress, type InsertUserProgress, userStories, type UserStory, type InsertUserStory } from "@shared/schema";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  age: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
const UserModel = mongoose.model<User>('User', UserSchema);

const UserProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
const UserProgressModel = mongoose.model<UserProgress>('UserProgress', UserProgressSchema);

const UserStorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
const UserStoryModel = mongoose.model<UserStory>('UserStory', UserStorySchema);

export interface IStorage {
  getUser(id: string): Promise<User | null>;
  getUserByUsername(username: string): Promise<User | null>;
  createUser(user: InsertUser): Promise<User>;
  getUserProgress(userId: string): Promise<UserProgress | null>;
  createUserProgress(progress: InsertUserProgress): Promise<UserProgress>;
  updateUserProgress(id: string, progress: Partial<InsertUserProgress>): Promise<UserProgress | null>;
  getUserStories(userId: string): Promise<UserStory[]>;
  getUserStory(id: string): Promise<UserStory | null>;
  createUserStory(story: InsertUserStory): Promise<UserStory>;
  updateUserStory(id: string, story: Partial<InsertUserStory>): Promise<UserStory | null>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | null> {
    return await UserModel.findById(id).exec();
  }
  
  async getUserByUsername(username: string): Promise<User | null> {
    return await UserModel.findOne({ username }).exec();
  }
  
  async createUser(insertUser: InsertUser): Promise<User> {
    const user = new UserModel(insertUser);
    return await user.save();
  }
  
  async getUserProgress(userId: string): Promise<UserProgress | null> {
    return await UserProgressModel.findOne({ userId }).exec();
  }
  
  async createUserProgress(progress: InsertUserProgress): Promise<UserProgress> {
    const userProgress = new UserProgressModel(progress);
    return await userProgress.save();
  }
  
  async updateUserProgress(id: string, updateData: Partial<InsertUserProgress>): Promise<UserProgress | null> {
    return await UserProgressModel.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: new Date() },
      { new: true }
    ).exec();
  }
  
  async getUserStories(userId: string): Promise<UserStory[]> {
    return await UserStoryModel.find({ userId }).exec();
  }
  
  async getUserStory(id: string): Promise<UserStory | null> {
    return await UserStoryModel.findById(id).exec();
  }
  
  async createUserStory(story: InsertUserStory): Promise<UserStory> {
    const userStory = new UserStoryModel(story);
    return await userStory.save();
  }
  
  async updateUserStory(id: string, updateData: Partial<InsertUserStory>): Promise<UserStory | null> {
    return await UserStoryModel.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: new Date() },
      { new: true }
    ).exec();
  }
}

export const storage = new DatabaseStorage();