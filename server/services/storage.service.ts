import { User } from '../models/user.model';
import type { InsertUser } from '@shared/schema';

class DatabaseStorage {
  async getUser(id: string) {
    return await User.findById(id).exec();
  }
  
  async getUserByUsername(username: string) {
    return await User.findOne({ username }).exec();
  }
  
  async createUser(insertUser: InsertUser) {
    const user = new User(insertUser);
    return await user.save();
  }
  
  // Progress ve Story metodları buraya eklenecek
}

export const storage = new DatabaseStorage();