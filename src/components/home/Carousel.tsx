import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";

type CarouselProps = {
  items: Post[];
};

export default function Carousel({ items }: CarouselProps) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-white">
      <div className="flex items-stretch gap-3 overflow-x-auto p-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((p) => (
          <Link
            key={p.id}
            href={p.href}
            className="group flex min-w-[260px] items-center gap-3 rounded-sm border border-neutral-200 bg-white p-3 sm:min-w-[300px]"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm bg-neutral-200">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="line-clamp-2 text-sm font-semibold text-neutral-900 group-hover:underline">
                {p.title}
              </p>

              {p.category ? (
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                  {p.category}
                </p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
