import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axiosClient from "../../api/axios-client";
import StateContext from "../../context/ContextProvider";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { setToken, setUser } = useContext(StateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm_password: confirmPasswordRef.current.value,
    };
    axiosClient
      .post("/register/", payload)
      .then(({ data }) => {
        setToken(data.token);
        setUser(data.user);
      })
      .catch((error) => {
        console.error(
          "Registration failed:",
          error.response ? error.response.data : error.message,
        );
      });
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f6f7f9] px-5 py-4 text-slate-950 sm:px-8">
      <div className="w-full max-w-2xl">
        <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-3 text-lg font-semibold text-slate-900"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-base font-bold text-white">
              R
            </span>
            RRMS
          </Link>

          <div className="mb-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Create account
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Name
              </label>
              <input
                ref={nameRef}
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                placeholder="Enter name"
                className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Email
              </label>
              <input
                ref={emailRef}
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
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Password
              </label>
              <div className="relative">
                <input
                  ref={passwordRef}
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
                  {showPassword ? <EyeOff /> : <Eye />}
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
                  ref={confirmPasswordRef}
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
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
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
              className="h-11 w-full rounded-lg cursor-pointer bg-emerald-600 px-5 text-sm font-bold text-white shadow-sm shadow-emerald-900/10 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              Create account
            </button>
          </form>

          <p className="mt-5 text-center text-[16px] text-slate-600">
            Already have an account?
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
