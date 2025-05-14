export interface Answer {
  text: string;
  score: {
    [key: string]: number;
    communication: number;
    analysis: number;
  };
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface UserData {
  name: string;
  age: number;
}

export interface Scores {
  [key: string]: number;
}

export interface CareerSuggestion {
  title: string;
  description: string;
  matchPercentage: number;
  requiredSkills: string[];
  growthAreas: string[];
}

export interface TechSpecialization {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
  requirements: string[];
}

export interface StoryChoice {
  text: string;
  consequence?: string;
  score?: {
    analysis?: number;
    communication?: number;
  };
  nextDimension?: string;
}

export interface StoryPart {
  title: string;
  description: string;
  image?: string;
  dimension?: string;
  choices?: StoryChoice[];
}

export type StoryState = 'initial' | 'in_progress' | 'success' | 'failure';

export interface StoryPath {
  id: string;
  requiredScore: {
    analysis: number;
    communication: number;
  };
  consequences: {
    success: string;
    failure: string;
  };
}

export interface DimensionRequirements {
  previousDimension?: string;
  minimumScore?: {
    analysis?: number;
    communication?: number;
  };
  path?: string;
}

export interface StoryDimension {
  id: string;
  title: string;
  transitions: string[];
  requirements: DimensionRequirements | null;
  state: StoryState;
}

export type Step = 
  | 'intro' 
  | 'name' 
  | 'age' 
  | 'psychologist'
  | 'story' 
  | 'questions' 
  | 'analysis' 
  | 'results' 
  | 'tech-story' 
  | 'career-story'
  | 'specialization'
  | 'morning-routine'
  | 'breakfast'
  | 'clothing'
  | 'transportation'
  | 'office-arrival'
  | 'book-choice'
  | 'dream-sequence';