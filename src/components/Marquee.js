import Link from "next/link";
import { getLatestNews } from "@/lib/api";

export default async function Marquee() {
  const news = await getLatestNews(10);

  return (
    <div className="flex items-center bg-red-700 text-sm text-white md:text-base">
      <span className="z-10 shrink-0 bg-red-900 px-3 py-2 font-bold md:px-4">
        সর্বশেষ
      </span>

      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1}
            >
              {news.map((item) => (
                <li key={item.id} className="flex items-center">
                  <Link
                    href={`/article/${item.id}`}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="whitespace-nowrap px-4 hover:underline"
                  >
                    {item.title}
                  </Link>
                  <span className="text-red-300">•</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}