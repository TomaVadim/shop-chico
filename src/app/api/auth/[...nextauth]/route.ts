import NextAuth from "next-auth";

import { authOptions } from "@/server/configs/auth-options.config";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
