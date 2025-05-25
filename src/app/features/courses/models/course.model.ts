export interface Course {
  id: string;
  imageUrl: string;
  title: string;
  lessons: string;
  description: string;
  thumbnail: string;
  price: number;
  categoryId: string;
  instructorId: string;
  author: string;
  rating: number;
  totalEnrollments: number;
  createdAt: Date;
}
