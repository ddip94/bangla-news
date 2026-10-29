"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function AuthButtons() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  }

  if (isPending) {
    return <div className="h-9 w-44 animate-pulse rounded bg-neutral-200" />;
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/signin" className="px-2 py-1.5 text-sm hover:text-red-700">
          সাইন ইন
        </Link>
        <Link
          href="/signup"
          className="rounded bg-red-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-800"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        {user.image ? (
        //   eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.image}
            alt={user.name}
            referrerPolicy="no-referrer"
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-sm font-bold text-white">
            {user.name?.charAt(0).toUpperCase()}
          </span>
        )}
        <span className="max-w-28 truncate text-sm font-medium">
          {user.name}
        </span>
      </div>

      <button
        onClick={handleSignOut}
        className="rounded border border-neutral-300 px-3 py-1.5 text-sm hover:border-red-700 hover:text-red-700"
      >
        সাইন আউট
      </button>
    </div>
  );
}