import { cacheLife } from "next/cache";

export async function getCategories() {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${process.env.BASE_URL}/api/categories`);

  if (!res.ok) {
    throw new Error("Categories load করা যায়নি");
  }

  const json = await res.json();
  return json.data;
}

export async function getLatestNews(limit = 10) {
  "use cache";
  cacheLife("minutes");

  const res = await fetch(`${process.env.BASE_URL}/api/news?limit=${limit}`);

  if (!res.ok) {
    throw new Error("Latest news load করা যায়নি");
  }

  const json = await res.json();
  return json.data;
}

export async function getSections() {
  "use cache";
  cacheLife("minutes");

  const res = await fetch(`${process.env.BASE_URL}/api/news/sections`);

  if (!res.ok) {
    throw new Error("Sections load করা যায়নি");
  }

  const json = await res.json();
  return json.data;
}

export async function getMostRead() {
  "use cache";
  cacheLife("minutes");

  const res = await fetch(`${process.env.BASE_URL}/api/news/most-read`);

  if (!res.ok) {
    throw new Error("Most read news load করা যায়নি");
  }

  const json = await res.json();
  return json.data;
}

export async function getCategoryNews(slug) {
  "use cache";
  cacheLife("minutes");

  const res = await fetch(`${process.env.BASE_URL}/api/category/${slug}`);

  if (!res.ok) {
    return null;
  }

  const json = await res.json();
  return json;
}

export async function getArticle(id) {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${process.env.BASE_URL}/api/article/${id}`);

  if (!res.ok) {
    return null;
  }

  const json = await res.json();
  return json.data;
}