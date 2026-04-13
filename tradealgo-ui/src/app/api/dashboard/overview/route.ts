import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    balance: "$52,430",
    dailyPnL: "+$480",
    winRate: "68%",
    riskStatus: "Healthy",
    user: {
      name: "Wilberry Wils",
      tier: "Elite Account",
    },
    notifications: [
      {
        id: 1,
        title: "Daily drawdown is within safe range",
        time: "5 min ago",
        level: "success",
      },
      {
        id: 2,
        title: "Subscription renews in 14 days",
        time: "1 hour ago",
        level: "info",
      },
      {
        id: 3,
        title: "Review yesterday's NAS100 trade",
        time: "Today",
        level: "warning",
      },
    ],
  });
}
