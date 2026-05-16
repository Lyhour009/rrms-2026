import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f6f7f9] px-5 py-8 text-slate-950 sm:px-8">
      <div className="w-full max-w-md">
        <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-3 text-sm font-semibold text-slate-900"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-base font-bold text-white">
              R
            </span>
            RRMS
          </Link>

          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Welcome back
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Sign in to your account
            </h1>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Manage reservations, requests, and room activity from one
              organized workspace.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-800"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 pr-20 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-2 top-1/2 h-9 -translate-y-1/2 rounded-md px-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-lg bg-emerald-600 px-5 text-sm font-bold text-white shadow-sm shadow-emerald-900/10 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              Sign in
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-600">
            New to RRMS?{" "}
            <Link
              to="/register"
              className="font-bold text-emerald-700 hover:text-emerald-800"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
