import { NextResponse } from "next/server";
import { getCurrentUserFromCookie } from "@/lib/server-auth";

export async function GET() {
  const user = await getCurrentUserFromCookie();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const account = user.tradingAccounts[0];

  if (!account) {
    return NextResponse.json({
      chart: [],
      trades: [],
    });
  }

  const fullAccount = await (await import("@/lib/prisma")).prisma.tradingAccount.findUnique({
    where: { id: account.id },
    include: {
      snapshots: {
        orderBy: { snapshotDate: "asc" },
      },
      trades: {
        orderBy: { openTime: "desc" },
      },
    },
  });

  return NextResponse.json({
    chart:
      fullAccount?.snapshots.map((row, index) => ({
        name: `Day ${index + 1}`,
        equity: row.equity,
      })) ?? [],
    trades:
      fullAccount?.trades.map((trade, index) => ({
        id: index + 1,
        pair: trade.symbol,
        type: trade.direction === "BUY" ? "Buy" : "Sell",
        date: trade.openTime
          ? trade.openTime.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
            })
          : "N/A",
        result: `${trade.rr && trade.rr > 0 ? "+" : ""}${trade.rr ?? 0}R`,
        status: trade.profitLoss >= 0 ? "Win" : "Loss",
      })) ?? [],
  });
}
