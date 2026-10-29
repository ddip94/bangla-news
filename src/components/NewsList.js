import Link from "next/link";

export default function NewsList({ articles }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.id}`}
          className="group block border-b border-neutral-200 p-4 last:border-b-0 hover:bg-neutral-50 md:px-5"
        >
          <p className="text-xs font-medium text-red-700 md:text-sm">
            {article.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold leading-snug group-hover:text-red-700">
            {article.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}