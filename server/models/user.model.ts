export interface User {
  id: string;
  email: string;
  name?: string;
  age?: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface InsertUser {
  email: string;
  password: string;
  name?: string;
  age?: number;
}