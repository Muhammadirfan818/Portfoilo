export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  details: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface PortfolioData {
  summary: string;
  education: Education[];
  experiences: Experience[];
  skills: {
    frontend: string[];
    backend: string[];
    ai_llm: string[];
    databases: string[];
    languages: string[];
    tools: string[];
  };
  projects: Project[];
  stats: Stat[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
