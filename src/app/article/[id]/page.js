import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle } from "@/lib/api";
import { formatDate, getLeadText } from "@/lib/utils";
import ArticleBody from "@/components/ArticleBody";

export default function ArticlePage({ params }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Suspense
        fallback={
          <p className="py-10 text-center text-neutral-500">লোড হচ্ছে...</p>
        }
      >
        <ArticleContent params={params} />
      </Suspense>
    </div>
  );
}

async function ArticleContent({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    notFound();
  }

  const lead = getLeadText(article.description);
  const authors = article.byline?.map((person) => person.name).join(", ");

  return (
    <article>
      <h1 className="text-3xl font-bold leading-tight md:text-4xl">
        {article.title}
      </h1>

      {lead && (
        <p className="mt-4 text-lg leading-8 text-neutral-500 md:text-xl">
          {lead}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-neutral-200 py-3 text-sm text-neutral-500">
        {authors && <span className="font-medium">{authors}</span>}
        <span>{formatDate(article.firstPublished)}</span>
        {article.wordCount && (
          <span>{article.wordCount.toLocaleString("bn-BD")} শব্দ</span>
        )}
      </div>

      <ArticleBody blocks={article.body ?? []} />

      {article.topics?.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2">
          {article.topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/category/${topic.id}`}
              className="rounded-full border border-neutral-300 px-3 py-1 text-sm hover:border-red-700 hover:text-red-700"
            >
              {topic.name}
            </Link>
          ))}
        </div>
      )}

      {article.sourceUrl && (
        <p className="mt-8 border-t border-neutral-200 pt-4 text-sm text-neutral-500">
          মূল প্রতিবেদন:{" "}
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 hover:underline"
          >
            BBC Bangla
          </a>
        </p>
      )}
    </article>
  );
}