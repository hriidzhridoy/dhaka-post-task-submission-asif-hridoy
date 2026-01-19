"use client";

import Image from "next/image";
import Link from "next/link";

type NavItem = { label: string; href: string };
type Post = {
  id: string;
  title: string;
  href: string;
  category?: string;
  author?: string;
  date?: string;
  excerpt?: string;
  image: string;
};

type DowntownHomePageProps = {
  siteTitle?: string;
  nav?: NavItem[];
  latest?: Post[];
  opinions?: { id: string; title: string; href: string }[];
  carousel?: Post[];
  lead?: Post;
  rightTop?: Post;
  rightBottom?: Post;
};

const DEFAULT_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Politics", href: "/politics" },
  { label: "Business", href: "/business" },
  { label: "National", href: "/national" },
  { label: "Culture", href: "/culture" },
  { label: "Opinion", href: "/opinion" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Sports", href: "/sports" },
];

const Placeholder = ({ className = "" }: { className?: string }) => (
  <div className={`bg-neutral-200 ${className}`} />
);

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
        {children}
      </h3>
      <div className="mt-2 h-px w-full bg-neutral-200" />
    </div>
  );
}

function CategoryPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded bg-neutral-900 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
      {children}
    </span>
  );
}

function SidebarListItem({ post }: { post: Post }) {
  return (
    <Link
      href={post.href}
      className="group flex gap-3 border-b border-neutral-200 py-3 last:border-b-0"
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm bg-neutral-200">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <Placeholder className="h-full w-full" />
        )}
      </div>

      <div className="min-w-0">
        <p className="line-clamp-2 text-sm font-semibold text-neutral-900 group-hover:underline">
          {post.title}
        </p>
      </div>
    </Link>
  );
}

function RightCard({ post, badge }: { post: Post; badge: string }) {
  return (
    <article className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
      <Link href={post.href} className="block">
        <div className="relative aspect-[16/10] w-full bg-neutral-200">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <Placeholder className="h-full w-full" />
          )}
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

function LeadStory({ post }: { post: Post }) {
  return (
    <article className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
      <Link href={post.href} className="block">
        <div className="relative aspect-[16/8] w-full bg-neutral-200">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <Placeholder className="h-full w-full" />
          )}
        </div>

        <div className="p-5">
          <div className="mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
              {post.category ?? "Politics"}
            </span>
          </div>

          <h2 className="text-xl font-semibold leading-snug text-neutral-900 hover:underline sm:text-2xl">
            {post.title}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            {post.author ? (
              <span className="font-semibold uppercase text-neutral-700">
                {post.author}
              </span>
            ) : null}
            {post.date ? <span>• {post.date}</span> : null}
            <span>• 0</span>
          </div>

          {post.excerpt ? (
            <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-neutral-600">
              {post.excerpt}
            </p>
          ) : null}

          <div className="mt-5">
            <span className="inline-flex items-center rounded-sm border border-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-800">
              READ MORE
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function Carousel({ items }: { items: Post[] }) {
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
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <Placeholder className="h-full w-full" />
              )}
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

export default function DowntownHomePage({
  siteTitle = "THE DOWNTOWN",
  nav = DEFAULT_NAV,
  latest = [
    {
      id: "l1",
      title: "Unconventional Workouts That Torch Fat And Sculpt Muscle",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "l2",
      title: "Millions of Indigenous People May Lose Voting Rights: Alliance",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "l3",
      title: "Crismonita Dwi Putri, RI’s Track Cycling Athlete for Asian Games",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "l4",
      title: "President Joko “Jokowi” Widodo Refuses to Sign MD3 Law",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1520975958225-5f5c3a61e5f2?auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "l5",
      title: "Garuda operates larger planes for Jakarta–Palembang route",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=60",
    },
  ],
  opinions = [
    {
      id: "o1",
      title: "Tour showcases shared art history of Indonesia and Singapore",
      href: "#",
    },
    {
      id: "o2",
      title:
        "Finland Has An Education System The Other Country Should Learn From",
      href: "#",
    },
    {
      id: "o3",
      title:
        "Women in Politics: Urgency of a Quota System For Women in Regional Elections",
      href: "#",
    },
    {
      id: "o4",
      title: "China’s Peng banned and fined for Wimbledon corruption attempt",
      href: "#",
    },
    {
      id: "o5",
      title: "Democratic Party politician calls Prabowo “cardboard general”",
      href: "#",
    },
  ],
  carousel = [
    {
      id: "c1",
      title: "The Chinese smartphone upstarts taking on Apple and Samsung",
      href: "#",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "c2",
      title:
        "Presidential Train Now Available For Jakarta Traveling to Bandung",
      href: "#",
      category: "National",
      image:
        "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "c3",
      title: "A Digital Media Startup Growing Up With Millennial Women",
      href: "#",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1520975693411-6a0f6a7b3a06?auto=format&fit=crop&w=400&q=60",
    },
  ],
  lead = {
    id: "lead",
    category: "Politics",
    title: "“Election was rigged” says opposition, police confirm three dead",
    href: "#",
    author: "John Doe",
    date: "February 17, 2020",
    excerpt:
      "When we get out of the glass bottle of our ego and when we escape like the squirrels in the...",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=70",
  },
  rightTop = {
    id: "rt",
    title: "Democratic Party politician calls Prabowo “cardboard general”",
    href: "#",
    author: "John Doe",
    date: "August 10, 2018",
    excerpt:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...",
    image:
      "https://images.unsplash.com/photo-1520975682034-3b0b50b0c7be?auto=format&fit=crop&w=900&q=70",
  },
  rightBottom = {
    id: "rb",
    title: "Google tracks location data even when users turn service off",
    href: "#",
    author: "John Doe",
    date: "August 14, 2018",
    excerpt:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=70",
  },
}: DowntownHomePageProps) {
  return (
    <div className="min-h-screen bg-neutral-200 text-neutral-900">
      {/* Masthead */}

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 py-6">
        {/* 3-column grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left sidebar */}
          <aside className="lg:col-span-3">
            <div className="rounded-sm border border-neutral-200 bg-white p-4">
              <SectionTitle>The Latest</SectionTitle>
              <div>
                {latest.map((p) => (
                  <SidebarListItem key={p.id} post={p} />
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-sm border border-neutral-200 bg-white p-4">
              <SectionTitle>Opinion</SectionTitle>
              <ul className="space-y-3">
                {opinions.map((o) => (
                  <li
                    key={o.id}
                    className="border-b border-neutral-200 pb-3 last:border-b-0"
                  >
                    <Link
                      href={o.href}
                      className="text-sm text-neutral-800 hover:underline"
                    >
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Center column */}
          <section className="lg:col-span-6">
            <Carousel items={carousel} />
            <div className="mt-6">
              {lead ? <LeadStory post={lead} /> : null}
            </div>

            {/* Lower two cards area (like the screenshot bottom previews) */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <article className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
                <div className="relative aspect-[16/10] w-full bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=70"
                    alt="Gallery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold leading-snug hover:underline">
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
                    alt="Desk"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold leading-snug hover:underline">
                    <Link href="#">
                      Inside the modern desk setup: tools, habits, and workflow
                    </Link>
                  </h3>
                </div>
              </article>
            </div>
          </section>

          {/* Right sidebar */}
          <aside className="lg:col-span-3">
            <div className="space-y-6">
              {rightTop ? <RightCard post={rightTop} badge="Opinion" /> : null}
              {rightBottom ? (
                <RightCard post={rightBottom} badge="Lifestyle" />
              ) : null}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
