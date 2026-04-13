import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, createToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const passwordHash = await hashPassword(password);

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });

    await tx.subscription.create({
      data: {
        userId: user.id,
        packageType: "Professional Suite",
        status: "ACTIVE",
        renewalDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      },
    });

    await tx.userSetting.create({
      data: {
        userId: user.id,
        compactCards: true,
        renewalEmails: true,
        riskWarnings: true,
        reviewReminders: true,
      },
    });

    const tradingAccount = await tx.tradingAccount.create({
      data: {
        userId: user.id,
        broker: "Demo Broker",
        platform: "MT5",
        accountNumber: `DEMO-${Date.now()}`,
        accountName: "Challenge Account",
        balance: 52430,
        equity: 52100,
        margin: 1200,
        freeMargin: 50900,
        currency: "USD",
      },
    });

    await tx.riskSetting.create({
      data: {
        tradingAccountId: tradingAccount.id,
        dailyDrawdownLimit: 5,
        maxDrawdownLimit: 10,
        riskPerTrade: 1,
        maxOpenTrades: 3,
      },
    });

    const now = new Date();

    await tx.trade.createMany({
      data: [
        {
          tradingAccountId: tradingAccount.id,
          ticket: "987654",
          symbol: "EURUSD",
          direction: "BUY",
          status: "CLOSED",
          lots: 0.5,
          entryPrice: 1.084,
          stopLoss: 1.08,
          takeProfit: 1.092,
          openTime: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 1),
          closeTime: new Date(now.getTime() - 1000 * 60 * 60 * 23),
          profitLoss: 180,
          rr: 1.8,
        },
        {
          tradingAccountId: tradingAccount.id,
          ticket: "987655",
          symbol: "GBPUSD",
          direction: "SELL",
          status: "CLOSED",
          lots: 0.4,
          entryPrice: 1.271,
          stopLoss: 1.276,
          takeProfit: 1.262,
          openTime: new Date(now.getTime() - 1000 * 60 * 60 * 48),
          closeTime: new Date(now.getTime() - 1000 * 60 * 60 * 47),
          profitLoss: -70,
          rr: -0.7,
        },
        {
          tradingAccountId: tradingAccount.id,
          ticket: "987656",
          symbol: "XAUUSD",
          direction: "BUY",
          status: "CLOSED",
          lots: 0.2,
          entryPrice: 2320,
          stopLoss: 2310,
          takeProfit: 2348,
          openTime: new Date(now.getTime() - 1000 * 60 * 60 * 72),
          closeTime: new Date(now.getTime() - 1000 * 60 * 60 * 70),
          profitLoss: 240,
          rr: 2.4,
        },
      ],
    });

    const snapshotRows = Array.from({ length: 7 }).map((_, index) => ({
      tradingAccountId: tradingAccount.id,
      snapshotDate: new Date(now.getTime() - (6 - index) * 1000 * 60 * 60 * 24),
      balance: [50000, 50320, 50180, 50740, 51010, 51480, 52430][index],
      equity: [49940, 50240, 50090, 50620, 50880, 51350, 52100][index],
      drawdown: [60, 80, 90, 120, 130, 110, 330][index],
      dailyPnL: [120, 320, -140, 560, 270, 470, 480][index],
    }));

    await tx.performanceSnapshot.createMany({
      data: snapshotRows,
    });

    return user;
  });

  const token = createToken({
    id: result.id,
    email: result.email,
    name: result.name,
    tier: "Professional Suite",
  });

  const res = NextResponse.json({
    id: result.id,
    name: result.name,
    email: result.email,
    tier: "Professional Suite",
  });

  res.cookies.set("auth-token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}