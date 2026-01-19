import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";

export default function LeadStory({ post }: { post: Post }) {
  return (
    <article className="border border-neutral-200 bg-white">
      <Link href={post.href} className="block">
        {/* Image */}
        <div className="relative aspect-[16/8] w-full bg-neutral-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Overlapping content box */}
        <div className="-mt-10 px-4 pb-4">
          <div className=" border-neutral-200 bg-white p-5 z-10 relative">
            {/* Category */}
            <div className="mb-3">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                {post.category ?? "Politics"}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold leading-snug text-neutral-900 hover:underline sm:text-2xl">
              {post.title}
            </h2>

            {/* Meta */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
              <span className="italic">by</span>{" "}
              {post.author ? (
                <span className="font-semibold uppercase text-neutral-700">
                  {post.author}
                </span>
              ) : null}
              {post.date ? <span>• {post.date}</span> : null}
              <span>• 0</span>
            </div>

            {/* Excerpt */}
            {post.excerpt ? (
              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-neutral-600">
                {post.excerpt}
              </p>
            ) : null}

            {/* Read more */}
            <div className="mt-5">
              <span className="inline-flex items-center border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-800">
                READ MORE
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
