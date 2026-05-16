import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f6f7f9] px-5 py-4 text-slate-950 sm:px-8">
      <div className="w-full max-w-2xl">
        <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-3 text-sm font-semibold text-slate-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-base font-bold text-white">
              R
            </span>
            RRMS
          </Link>

          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Create account
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Register for RRMS
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Set up your account to reserve rooms, review requests, and track
              booking activity.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-slate-800"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Enter first name"
                  className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-slate-800"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Enter last name"
                  className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
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
                  className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-800"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter phone number"
                  className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-800"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create password"
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 pr-20 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
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

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-slate-800"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Repeat password"
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 pr-20 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((value) => !value)}
                    className="absolute right-2 top-1/2 h-9 -translate-y-1/2 rounded-md px-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm leading-5 text-slate-700">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span>
                I agree to the terms and understand that my account may need
                approval before accessing room reservations.
              </span>
            </label>

            <button
              type="submit"
              className="h-11 w-full rounded-lg bg-emerald-600 px-5 text-sm font-bold text-white shadow-sm shadow-emerald-900/10 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              Create account
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-emerald-700 hover:text-emerald-800"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
