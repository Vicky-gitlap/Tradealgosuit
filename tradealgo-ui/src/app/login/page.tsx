"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Mail, Lock } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import BrandLogo from "@/components/brand/BrandLogo";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.10),_transparent_22%),linear-gradient(180deg,_#070707,_#040404_45%,_#070707)]" />

      {/* Back to Home */}
      <div className="absolute left-6 top-6 z-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-amber-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </a>
      </div>

      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <BrandLogo showText={false} size={112} />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">TradeAlgoSuite</h1>
            <p className="mt-2 text-sm text-zinc-400">
              Sign in to your trading dashboard
            </p>
          </div>

          {/* Login Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                  Email
                </label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-zinc-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg border border-white/10 bg-black/50 py-3 pl-10 pr-3 text-white placeholder-zinc-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
                  Password
                </label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-zinc-400" />
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-zinc-400 hover:text-zinc-300"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-lg border border-white/10 bg-black/50 py-3 pl-10 pr-10 text-white placeholder-zinc-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/10 bg-black/50 text-amber-400 focus:ring-amber-400/50 focus:ring-offset-0"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-300">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-amber-400 hover:text-amber-300"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-black px-2 text-zinc-400">Don't have an account?</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-sm font-medium text-amber-400 hover:text-amber-300"
              >
                Create a free account
              </a>
            </div>
          </Card>

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-zinc-500">
            By signing in, you agree to our{" "}
            <a href="#" className="text-amber-400 hover:text-amber-300">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-amber-400 hover:text-amber-300">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}