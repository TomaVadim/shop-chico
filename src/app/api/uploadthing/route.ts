import { NextRequest, NextResponse } from "next/server";

import { createRouteHandler } from "uploadthing/next";
import { UTApi } from "uploadthing/server";

import { ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const data = await request.json();

  const utapi = new UTApi();
  await utapi.deleteFiles(data.key);

  return NextResponse.json({
    message: "File deleted successfully",
    status: 200,
  });
}
