import { NextRequest, NextResponse } from "next/server";

import { hashPassword } from "@/server/utils/secure-password";
import { connectToDB } from "@/server/utils/connect-to-db";
import User from "@/server/schemas/user-schema";

const handler = async (req: NextRequest) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { email, password } = body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

    if (!user) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Success",
    });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
};

export { handler as POST };
