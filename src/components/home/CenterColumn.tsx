import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";
import Carousel from "./Carousel";
import LeadStory from "./LeadStory";

type CenterColumnProps = {
  carousel: Post[];
  lead: Post;
};

export default function CenterColumn({ carousel, lead }: CenterColumnProps) {
  return (
    <section className="lg:col-span-6 space-y-6">
      {/* Top carousel */}
      <div className="hidden sm:block">
        <Carousel items={carousel} />
      </div>

      {/* Lead story */}
      <LeadStory post={lead} />

      {/* Bottom two cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        <article className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
          <div className="relative aspect-[16/10] w-full bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=70"
              alt="Travel"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-base text-black font-semibold leading-snug hover:underline">
              <Link href="#">
                Travelers gather for a golden hour meetup by the sea
              </Link>
            </h3>
          </div>
        </article>

        <article className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
          <div className="relative aspect-[16/10] w-full bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=70"
              alt="Workspace"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-base text-black font-semibold leading-snug hover:underline">
              <Link href="#">
                Inside the modern desk setup: tools, habits, and workflow
              </Link>
            </h3>
          </div>
        </article>
      </div>
    </section>
  );
}
