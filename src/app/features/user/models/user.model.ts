export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN';
  createdAt: Date;
}
