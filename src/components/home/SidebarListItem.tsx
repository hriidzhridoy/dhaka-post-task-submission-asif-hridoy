import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";

export default function SidebarListItem({ post }: { post: Post }) {
  return (
    <Link href={post.href} className="group flex gap-3 border-b py-3">
      <div className="relative h-14 w-14 bg-neutral-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm font-semibold group-hover:underline">
        {post.title}
      </p>
    </Link>
  );
}
