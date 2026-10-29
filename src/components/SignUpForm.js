"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import InputField from "./InputField";

export default function SignUpForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: image || undefined,
      });

      if (error) {
        setErrorMessage(error.message || "সাইন আপ করা যায়নি। আবার চেষ্টা করো।");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setErrorMessage("সংযোগে সমস্যা হয়েছে। আবার চেষ্টা করো।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-red-700">
        সাইন আপ
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="নাম"
          id="name"
          type="text"
          required
          autoComplete="name"
        />
        <InputField
          label="Image"
          id="image"
          type="url"
          placeholder="https://example.com/photo.jpg"
          autoComplete="photo"
        />
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
          minLength={8}
          autoComplete="new-password"
        />

        {errorMessage && (
          <p
            role="alert"
            className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-red-700 py-2.5 font-medium text-white hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "অপেক্ষা করুন..." : "সাইন আপ করুন"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-neutral-700">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="font-medium text-red-700 hover:underline">
          সাইন ইন করুন
        </Link>
      </p>
    </div>
  );
}