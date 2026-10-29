import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getCategoryNews } from "@/lib/api";
import NewsCard from "@/components/NewsCard";

export default function CategoryPage({ params }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <Suspense
        fallback={
          <p className="py-10 text-center text-neutral-500">লোড হচ্ছে...</p>
        }
      >
        <CategoryNews params={params} />
      </Suspense>
    </div>
  );
}

async function CategoryNews({ params }) {
  const { slug } = await params;
  const category = await getCategoryNews(slug);

  if (!category) {
    notFound();
  }

  return (
    <section>
      <h1 className="mb-6 border-l-4 border-red-700 pl-3 text-2xl font-bold md:text-3xl">
        {category.title}
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {category.data.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}