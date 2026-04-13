import { NextResponse } from "next/server";
import { getCurrentUserFromCookie } from "@/lib/server-auth";

export async function GET() {
  const user = await getCurrentUserFromCookie();

  if (!user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      tier: user.subscriptions[0]?.packageType ?? "Starter Account",
    },
  });
}