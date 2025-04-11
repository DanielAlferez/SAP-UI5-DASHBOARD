export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const getDurationLabel = (from: string, to: string): string => {
  const start = new Date(from);
  const end = new Date(to);
  const diffMs = end.getTime() - start.getTime();

  if (diffMs <= 0) return "0h";

  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  const parts = [];
  if (days) parts.push(`${days}d`);
  if (hours) parts.push(`${hours}h`);

  return parts.join(" ");
};
