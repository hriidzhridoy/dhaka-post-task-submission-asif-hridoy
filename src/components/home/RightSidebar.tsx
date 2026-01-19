import { Post } from "@/types/post";
import RightCard from "./RightCard";

type RightSidebarProps = {
  top: Post;
  bottom?: Post;
};

export default function RightSidebar({ top, bottom }: RightSidebarProps) {
  return (
    <aside className="lg:col-span-3 space-y-6">
      <RightCard post={top} badge="Opinion" />

      {bottom && <RightCard post={bottom} badge="Lifestyle" />}
    </aside>
  );
}
