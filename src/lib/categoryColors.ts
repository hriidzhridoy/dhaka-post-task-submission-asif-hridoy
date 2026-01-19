// lib/categoryColors.ts

export const CATEGORY_COLORS: Record<string, string> = {
  opinion: "bg-amber-500",
  lifestyle: "bg-emerald-600",
  business: "bg-blue-600",
  politics: "bg-red-600",
  sports: "bg-orange-500",
  culture: "bg-purple-600",
  national: "bg-sky-600",
};

/**
 * Returns a Tailwind bg color class for a category
 */
export function getCategoryColor(category?: string): string {
  if (!category) return "bg-neutral-700";

  return CATEGORY_COLORS[category.toLowerCase()] ?? "bg-neutral-700";
}
