export function formatDate(iso) {
  if (!iso) return "";

  const date = new Date(iso);

  const day = date.toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  });

  const time = date.toLocaleTimeString("bn-BD", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Dhaka",
  });

  return `${day}, ${time}`;
}

export function getLeadText(description) {
  if (!description) return "";
  if (typeof description === "string") return description;

  return description.blocks?.[0]?.model?.blocks?.[0]?.model?.text ?? "";
}