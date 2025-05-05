export interface User {
    name: string;
    surname: string;
    email: string;
    status: string;
    role: string;
    image?: File | null; 
  }