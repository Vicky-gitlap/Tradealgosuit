import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    chart: [
      { name: "Day 1", equity: 50000 },
      { name: "Day 2", equity: 50320 },
      { name: "Day 3", equity: 50180 },
      { name: "Day 4", equity: 50740 },
      { name: "Day 5", equity: 51010 },
      { name: "Day 6", equity: 51480 },
      { name: "Day 7", equity: 52430 },
    ],
    trades: [
      { id: 1, pair: "EURUSD", type: "Buy", date: "12 Jan", result: "+1.8R", status: "Win" },
      { id: 2, pair: "GBPUSD", type: "Sell", date: "11 Jan", result: "-0.7R", status: "Loss" },
      { id: 3, pair: "XAUUSD", type: "Buy", date: "10 Jan", result: "+2.4R", status: "Win" },
      { id: 4, pair: "NAS100", type: "Sell", date: "09 Jan", result: "+1.1R", status: "Win" },
      { id: 5, pair: "USDJPY", type: "Buy", date: "08 Jan", result: "-1.0R", status: "Loss" },
    ],
  });
}
