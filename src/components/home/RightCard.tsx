import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";
import { Clock } from "lucide-react";
import { CATEGORY_COLORS } from "@/lib/categoryColors";

function CategoryPill({ label }: { label: string }) {
  const color = CATEGORY_COLORS[label.toLowerCase()] ?? "bg-neutral-700";

  return (
    <span
      className={`inline-flex items-center rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white ${color}`}
    >
      {label}
    </span>
  );
}

export default function RightCard({
  post,
  badge,
}: {
  post: Post;
  badge: string;
}) {
  return (
    <article className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
      <Link href={post.href} className="block">
        <div className="relative aspect-[16/10] w-full bg-neutral-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute left-3 top-3">
            <CategoryPill label={badge} />
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-base font-semibold leading-snug text-neutral-900 hover:underline">
            {post.title}
          </h3>

          {/* Meta row */}
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
            {post.author ? (
              <span>
                <span className="italic">by </span>
                <span className="font-semibold uppercase text-neutral-700">
                  {post.author}
                </span>
              </span>
            ) : null}

            {post.date ? (
              <span className="inline-flex items-center gap-1">
                <Clock size={12} className="shrink-0" />
                <span>{post.date}</span>
              </span>
            ) : null}
          </div>

          {post.excerpt ? (
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">
              {post.excerpt}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
