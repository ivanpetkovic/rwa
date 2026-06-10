export enum UserRole {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

export interface User {
  id: number;
  email: string;
  password: string;
  role: UserRole;
}
