import { NextResponse } from "next/server";
import { getCurrentUserFromCookie } from "@/lib/server-auth";

export async function GET() {
  const user = await getCurrentUserFromCookie();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const account = user.tradingAccounts[0];
  const risk = account?.riskSetting;
  const tier = user.subscriptions[0]?.packageType ?? "Starter Account";

  const dailyPnL =
    account?.balance && account?.equity
      ? Number((account.equity - (account.balance - 480)).toFixed(2))
      : 0;

  return NextResponse.json({
    balance: `$${Number(account?.balance ?? 0).toLocaleString()}`,
    dailyPnL: `${dailyPnL >= 0 ? "+" : ""}$${dailyPnL.toLocaleString()}`,
    winRate: "68%",
    riskStatus: "Healthy",
    user: {
      name: user.name,
      tier,
    },
    notifications: [
      {
        id: 1,
        title: `Daily drawdown limit set to ${risk?.dailyDrawdownLimit ?? 5}%`,
        time: "Today",
        level: "success",
      },
      {
        id: 2,
        title: `Subscription active: ${tier}`,
        time: "Today",
        level: "info",
      },
      {
        id: 3,
        title: "Review your latest trade performance",
        time: "Today",
        level: "warning",
      },
    ],
  });
}
