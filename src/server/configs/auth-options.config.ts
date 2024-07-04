import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@/server/schemas/user-schema";
import { connectToDB } from "@/server/utils/connect-to-db";
import { comparePassword } from "@/server/utils/secure-password";
import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import { ExtendedUser } from "@/shared/interfaces/extended-user";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: PUBLIC_ROUTES.SIGNIN,
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          console.log("No credentials provided");
          return null;
        }

        await connectToDB();

        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          console.log("User not found:", credentials.email);
          return null;
        }

        const isPasswordValid = await comparePassword(
          credentials.password,
          user.password
        );
        console.log("isPasswordValid", isPasswordValid);

        if (!isPasswordValid) {
          console.log("Invalid password for user:", credentials.email);
          return null;
        }

        console.log("Authorization successful for user:", user.email);
        return {
          id: user._id.toString(),
          email: user.email,
          role: user.role,
          status: "authenticated",
        } as ExtendedUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const extendedUser = user as ExtendedUser;
        token.id = extendedUser.id;
        token.role = extendedUser.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role;
      }
      return session;
    },
  },
};
