import SectionTitle from "../shared/SectionTitle";
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

        <ul className="divide-y divide-neutral-200">
          {opinions.map((o) => (
            <li key={o.id} className="py-3">
              <a
                href={o.href}
                className="group flex items-start gap-3 text-sm leading-snug text-neutral-900 hover:underline"
              >
                {/* Arrow bullet */}
                <span className="mt-1 text-[10px] text-neutral-600">▶</span>

                {/* Title */}
                <span>{o.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
