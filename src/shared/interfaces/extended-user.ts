import { User as NextAuthUser } from "next-auth";

export interface ExtendedUser extends NextAuthUser {
  id: string;
  role: string;
}
