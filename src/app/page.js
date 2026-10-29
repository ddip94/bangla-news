import { getSections, getMostRead } from "@/lib/api";
import MainNews from "@/components/MainNews";
import NewsList from "@/components/NewsList";
import NewsSection from "@/components/NewsSection";
import MostRead from "@/components/MostRead";

export default async function Home() {
  const [sections, mostRead] = await Promise.all([
    getSections(),
    getMostRead(),
  ])
  const mainSection =
  sections.find((section) => section.title === "প্রধান খবর") ?? sections[0];
  const mainNews = mainSection.articles[0];
  const sideNews = mainSection.articles.slice(1, 5);

  const otherSections = sections
    .filter((section) => section !== mainSection)
    .map((section) => ({
      ...section,
      articles: section.articles
        .filter((article) => article.type !== "link")
        .slice(0, 4),
    }))
    .filter((section) => section.articles.length > 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div>
          <MainNews article={mainNews} />
        </div>

        <NewsList articles={sideNews} />

        <MostRead articles={mostRead}/>
      </div>

      <div className="mt-10 space-y-10">
        {otherSections.map((section) => (
          <NewsSection
            key={section.curationId}
            title={section.title}
            articles={section.articles}
          />
        ))}
      </div>
    </div>
  );
}