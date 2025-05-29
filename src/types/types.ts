export interface Todo {
  id: number;
  name: string;
  completed: boolean;
};

export type Filter = 'all tasks' | 'active' | 'completed';

