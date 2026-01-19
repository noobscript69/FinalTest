
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DesignGeneration {
  prompt: string;
  imageUrl?: string;
  description?: string;
  timestamp: number;
}

export enum GenerationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
