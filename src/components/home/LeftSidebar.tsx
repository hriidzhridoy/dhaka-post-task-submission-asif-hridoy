import SectionTitle from "./SectionTitle";
import SidebarListItem from "./SidebarListItem";
import { Post } from "@/types/post";

export default function LeftSidebar({
  latest,
  opinions,
}: {
  latest: Post[];
  opinions: { id: string; title: string; href: string }[];
}) {
  return (
    <aside className="lg:col-span-3 space-y-6">
      <div className="border bg-white p-4">
        <SectionTitle>The Latest</SectionTitle>
        {latest.map((p) => (
          <SidebarListItem key={p.id} post={p} />
        ))}
      </div>

      <div className="border bg-white p-4">
        <SectionTitle>Opinion</SectionTitle>
        <ul className="space-y-3">
          {opinions.map((o) => (
            <li key={o.id}>
              <a href={o.href} className="text-sm hover:underline">
                {o.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
