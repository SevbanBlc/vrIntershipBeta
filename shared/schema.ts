import { pgTable, text, uuid, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  age: integer("age"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow()
});

export const userProgress = pgTable("user_progress", {
  id: uuid("id").primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id),
  currentStep: text("current_step").notNull(),
  scores: jsonb("scores").notNull(),
  careerSuggestions: text("career_suggestions").array().notNull(),
  selectedCareer: text("selected_career"),
  currentStoryPart: integer("current_story_part"),
  currentDimension: text("current_dimension"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow()
});

export const insertUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2).optional(),
  age: z.number().min(16).max(100).optional()
});

export const insertUserProgressSchema = createInsertSchema(userProgress).pick({
  userId: true,
  currentStep: true,
  scores: true,
  careerSuggestions: true,
  selectedCareer: true,
  currentStoryPart: true,
  currentDimension: true
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertUserProgress = typeof userProgress.$inferInsert;
export type UserProgress = typeof userProgress.$inferSelect;