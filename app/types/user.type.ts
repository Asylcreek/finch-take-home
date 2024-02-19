export interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone: string | null;
  email: string;
  is_admin: number;
  email_verified_at: Date | null;
  last_login: Date | null;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
  token: string;
}
