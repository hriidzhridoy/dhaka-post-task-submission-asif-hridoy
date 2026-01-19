import CenterColumn from "./CenterColumn";
import LeftSidebar from "./LeftSidebar";

import {
  latestPosts,
  opinionPosts,
  carouselPosts,
  leadPost,
  rightTopPost,
} from "@/data/home.data";
import RightSidebar from "./RightSidebar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-200">
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-12">
          <LeftSidebar latest={latestPosts} opinions={opinionPosts} />
          <CenterColumn carousel={carouselPosts} lead={leadPost} />
          <RightSidebar top={rightTopPost} />
        </div>
      </main>
    </div>
  );
}
