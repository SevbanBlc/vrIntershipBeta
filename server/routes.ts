import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { InsertUserProgress, InsertUserStory } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  process.env.SESSION_SECRET = process.env.SESSION_SECRET || "vrintership-secret-key";
  
  setupAuth(app);

  app.get("/api/progress", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Oturum açmanız gerekiyor");
    }

    try {
      const userId = req.user!._id; // MongoDB için string
      const progress = await storage.getUserProgress(userId);
      res.json(progress || null);
    } catch (error) {
      console.error("Progress alma hatası:", error);
      res.status(500).send("İlerleme bilgisi alınamadı");
    }
  });

  app.post("/api/progress", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Oturum açmanız gerekiyor");
    }

    try {
      const userId = req.user!._id; // MongoDB için string
      
      const existingProgress = await storage.getUserProgress(userId);
      
      if (existingProgress) {
        const updatedProgress = await storage.updateUserProgress(
          existingProgress._id.toString(), // MongoDB _id
          { ...req.body, userId }
        );
        return res.json(updatedProgress);
      } else {
        const newProgress = await storage.createUserProgress({
          ...req.body,
          userId
        });
        return res.json(newProgress);
      }
    } catch (error) {
      console.error("Progress kaydetme hatası:", error);
      res.status(500).send("İlerleme bilgisi kaydedilemedi");
    }
  });

  app.get("/api/stories", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Oturum açmanız gerekiyor");
    }

    try {
      const userId = req.user!._id; // MongoDB için string
      const stories = await storage.getUserStories(userId);
      res.json(stories);
    } catch (error) {
      console.error("Hikaye alma hatası:", error);
      res.status(500).send("Hikaye bilgisi alınamadı");
    }
  });

  app.post("/api/stories", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Oturum açmanız gerekiyor");
    }

    try {
      const userId = req.user!._id; // MongoDB için string
      const { storyId, ...storyData } = req.body;
      
      if (storyId) {
        const updatedStory = await storage.updateUserStory(
          storyId,
          { ...storyData, userId }
        );
        return res.json(updatedStory);
      } else {
        const newStory = await storage.createUserStory({
          ...storyData,
          userId
        });
        return res.json(newStory);
      }
    } catch (error) {
      console.error("Hikaye kaydetme hatası:", error);
      res.status(500).send("Hikaye bilgisi kaydedilemedi");
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}