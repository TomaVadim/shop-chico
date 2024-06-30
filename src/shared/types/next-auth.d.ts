import { Session, User as NextAuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends NextAuthUser {
    id: string;
    role?: string;
    status?: string;
  }

  interface Session {
    user: {
      id: string;
      role?: string;
    } & NextAuthUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
  }
}
