import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";

function CategoryPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded bg-neutral-900 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
      {children}
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
            <CategoryPill>{badge}</CategoryPill>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-base font-semibold leading-snug text-neutral-900 hover:underline">
            {post.title}
          </h3>

          <div className="mt-2 text-xs text-neutral-500">
            {post.author ? (
              <span className="font-semibold uppercase">{post.author}</span>
            ) : null}
            {post.date ? <span className="ml-2">{post.date}</span> : null}
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
