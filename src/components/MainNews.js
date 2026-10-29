import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function MainNews({ article }) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <Link href={`/article/${article.id}`} className="group block">
        {article.imageUrl && (
          <div className="relative aspect-video w-full bg-neutral-200">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="p-4 md:p-5">
          <p className="text-sm font-medium text-red-700">{article.category}</p>
          <h2 className="mt-2 text-2xl font-bold leading-snug group-hover:text-red-700 md:text-3xl">
            {article.title}
          </h2>
          <p className="mt-3 line-clamp-3 text-neutral-600">
            {article.description}
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            {formatDate(article.firstPublished)}
          </p>
        </div>
      </Link>
    </article>
  );
}