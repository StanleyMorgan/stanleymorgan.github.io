export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}

export interface Skill {
  name: string;
  icon: string; // URL or Lucide component name logic
  category: 'frontend' | 'backend' | 'blockchain' | 'tools';
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
  timestamp: Date;
}