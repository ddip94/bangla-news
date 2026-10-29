import Image from "next/image";

export default function ArticleBody({ blocks }) {
  return (
    <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-800">
      {blocks.map((block, index) => {
        if (block.type === "text") {
          return block.text
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, i) => <p key={`${index}-${i}`}>{line}</p>);
        }

        if (block.type === "subheading") {
          return (
            <h2
              key={index}
              className="pt-2 text-2xl font-bold text-neutral-900"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={index}>
              <Image
                src={block.url}
                alt={block.altText || ""}
                width={block.width}
                height={block.height}
                sizes="(min-width: 768px) 768px, 100vw"
                className="h-auto w-full rounded-lg"
              />
              {block.caption && (
                <figcaption className="mt-2 text-sm leading-6 text-neutral-500">
                  {block.caption}
                  {block.copyrightHolder && ` (${block.copyrightHolder})`}
                </figcaption>
              )}
            </figure>
          );
        }

        return null;
      })}
    </div>
  );
}