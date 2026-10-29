import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function NewsCard({ article }) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <Link href={`/article/${article.id}`} className="group block">
        {article.imageUrl && (
          <div className="relative aspect-video w-full bg-neutral-200">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="p-4">
          <h3 className="line-clamp-3 text-base font-semibold leading-snug group-hover:text-red-700 md:text-lg">
            {article.title}
          </h3>
          <p className="mt-2 text-xs text-neutral-400">
            {formatDate(article.firstPublished)}
          </p>
        </div>
      </Link>
    </article>
  );
}