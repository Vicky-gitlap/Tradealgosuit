"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      let data: { error?: string } = {};

      try {
        data = await res.json();
      } catch {
        data = { error: "Something went wrong. Please try again." };
      }

      if (!res.ok) {
        setError(data.error || "Invalid email or password.");
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Network error. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-10 text-white">
      <div className="absolute left-6 top-6 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-amber-300"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-amber-500/10 backdrop-blur-sm sm:p-8">
          <div className="mb-8 flex justify-center">
            <BrandLogo showText={false} size={72} />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Sign in to access your dashboard.
            </p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-amber-300/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 pr-10 text-white outline-none transition placeholder:text-zinc-500 focus:border-amber-300/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <Button className="mt-2 w-full" size="lg" type="submit">
              Sign In
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm">
            <Link
              href="/dashboard"
              className="text-amber-300 transition hover:text-amber-200"
            >
              Forgot password?
            </Link>
            <Link
              href="/register"
              className="text-zinc-400 transition hover:text-white"
            >
              Don't have an account? Register here
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}