"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavList({ items, pathname }) {
  return (
    <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-5 gap-y-1 px-4 text-sm md:gap-x-6 md:text-base">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`block border-b-2 pb-2 ${
                isActive
                  ? "border-red-700 font-bold text-red-700"
                  : "border-transparent hover:text-red-700"
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function NavLinks({ items }) {
  const pathname = usePathname();

  return <NavList items={items} pathname={pathname} />;
}