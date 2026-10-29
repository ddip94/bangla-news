import { Suspense } from "react";
import { getCategories } from "@/lib/api";
import NavLinks, { NavList } from "./NavLinks";

export default async function Navbar() {
  const categories = await getCategories();

  const items = [
    { href: "/", title: "হোম" },
    ...categories
      .filter((item) => item.scrapable)
      .map((item) => ({
        href: `/category/${item.slug}`,
        title: item.title,
      })),
  ];

  return (
    <nav className="border-b border-neutral-200">
      <Suspense fallback={<NavList items={items} />}>
        <NavLinks items={items} />
      </Suspense>
    </nav>
  );
}