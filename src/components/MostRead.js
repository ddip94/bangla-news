import Link from "next/link";

export default function MostRead({ articles }) {
  return (
    <aside className="rounded-xl border border-neutral-200 bg-white p-4 md:p-6">
      <h2 className="mb-2 text-xl font-bold md:text-2xl">সর্বাধিক পঠিত</h2>

      <ol>
        {articles.map((article) => (
          <li
            key={article.id}
            className="border-b border-neutral-100 last:border-b-0"
          >
            <Link
              href={`/article/${article.id}`}
              className="group flex gap-3 py-3"
            >
              <span className="w-10 shrink-0 text-3xl font-bold leading-none text-red-700">
                {article.rank.toLocaleString("bn-BD")}
              </span>
              <span className="font-medium leading-snug group-hover:text-red-700">
                {article.title}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}