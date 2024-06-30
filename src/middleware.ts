import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import { ROLES } from "@/shared/enums/auth/roles.auth";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });
  console.log("Retrieved token:", token);

  if (!token) {
    console.log("No token found, redirecting to login");
    return NextResponse.redirect(new URL(PUBLIC_ROUTES.SIGNIN, req.url), {
      status: 302,
    });
  }

  const userRole = token.role;
  if (userRole !== ROLES.ADMIN) {
    return NextResponse.redirect(new URL(PUBLIC_ROUTES.HOME, req.url), {
      status: 302,
    });
  }

  console.log("User is authenticated and has admin role, proceeding");
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
