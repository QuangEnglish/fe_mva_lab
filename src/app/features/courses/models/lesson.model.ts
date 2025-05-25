export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  videoUrl: string;
  duration: number; // in minutes
  order: number;
}
