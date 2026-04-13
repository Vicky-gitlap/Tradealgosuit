import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function getCurrentUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) return null;

  const decoded = verifyToken(token) as { id?: string } | null;
  if (!decoded?.id) return null;

  const user = await prisma.user.findUnique({
    where: { id: decoded.id },
    include: {
      subscriptions: {
        orderBy: { createdAt: "desc" },
        take: 1,
      },
      settings: true,
      tradingAccounts: {
        include: {
          riskSetting: true,
        },
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  });

  return user;
}