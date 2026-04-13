import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUserFromCookie } from "@/lib/server-auth";

export async function GET() {
  const user = await getCurrentUserFromCookie();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    fullName: user.name,
    email: user.email,
    renewalEmails: user.settings?.renewalEmails ?? true,
    riskWarnings: user.settings?.riskWarnings ?? true,
    reviewReminders: user.settings?.reviewReminders ?? true,
    compactCards: user.settings?.compactCards ?? true,
  });
}

export async function PATCH(req: Request) {
  const user = await getCurrentUserFromCookie();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.fullName ?? user.name,
      email: body.email ?? user.email,
      settings: {
        upsert: {
          create: {
            renewalEmails: body.renewalEmails ?? true,
            riskWarnings: body.riskWarnings ?? true,
            reviewReminders: body.reviewReminders ?? true,
            compactCards: body.compactCards ?? true,
          },
          update: {
            renewalEmails: body.renewalEmails ?? true,
            riskWarnings: body.riskWarnings ?? true,
            reviewReminders: body.reviewReminders ?? true,
            compactCards: body.compactCards ?? true,
          },
        },
      },
    },
  });

  return NextResponse.json({ success: true });
}