import NewsCard from "./NewsCard";

export default function NewsSection({ title, articles }) {
  return (
    <section>
      <h2 className="mb-4 border-l-4 border-red-700 pl-3 text-xl font-bold md:text-2xl">
        {title}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}