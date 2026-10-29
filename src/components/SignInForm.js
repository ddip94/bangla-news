"use client";

import Link from "next/link";
import InputField from "./InputField";

export default function SignInForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Sign in:", { email, passwordLength: password.length });
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-red-700">
        সাইন ইন
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="ইমেইল"
          id="email"
          type="email"
          required
          autoComplete="email"
        />
        <InputField
          label="পাসওয়ার্ড"
          id="password"
          type="password"
          required
          autoComplete="current-password"
        />

        <button
          type="submit"
          className="w-full rounded-md bg-red-700 py-2.5 font-medium text-white hover:bg-red-800"
        >
          সাইন ইন করুন
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-neutral-700">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="font-medium text-red-700 hover:underline">
          সাইন আপ করুন
        </Link>
      </p>
    </div>
  );
}