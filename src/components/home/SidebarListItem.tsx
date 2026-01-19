import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";

export default function SidebarListItem({ post }: { post: Post }) {
  return (
    <Link
      href={post.href}
      className="group flex items-start gap-4 border-b border-neutral-200 py-4 last:border-b-0"
    >
      {/* Thumbnail */}
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-sm bg-neutral-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Title */}
      <p className="line-clamp-3 text-sm font-semibold leading-snug text-neutral-900 group-hover:underline">
        {post.title}
      </p>
    </Link>
  );
}
