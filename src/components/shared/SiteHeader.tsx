"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Divider from "@/components/shared/Divider";
import { ChevronDown } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

type SiteHeaderProps = {
  siteTitle?: string;
  nav?: NavItem[];
};

const DEFAULT_NAV: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Layout 1", href: "/layout-1" },
      { label: "Layout 2", href: "/layout-2" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Politics", href: "/politics" },
  { label: "Business", href: "/business" },
  { label: "National", href: "/national" },
  { label: "Culture", href: "/culture" },
  { label: "Opinion", href: "/opinion" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Sports", href: "/sports" },
];

export default function SiteHeader({
  siteTitle = "THE DOWNTOWN",
  nav = DEFAULT_NAV,
}: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="bg-white">
      {/* Masthead */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center py-6">
          <Link
            href="/"
            className="text-lg font-extrabold tracking-[0.2em] text-black sm:text-xl"
          >
            {siteTitle}
          </Link>
        </div>
      </div>

      {/* Full-width divider */}
      <Divider className="bg-black" />

      {/* Nav */}
      <nav>
        <div className="mx-auto max-w-6xl px-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3">
            {nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.label} className="relative group">
                  {/* Main link */}
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wide pb-1 transition-colors
    ${
      isActive
        ? "text-black border-b border-black"
        : "text-neutral-700 hover:text-black"
    }
  `}
                  >
                    {item.label}

                    {item.children && (
                      <ChevronDown
                        size={14}
                        className="mt-[1px] text-neutral-500 group-hover:text-black transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {/* Submenu (Home only) */}
                  {item.children && (
                    <div className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-3 group-hover:block">
                      <div className="min-w-[160px] rounded-sm border border-neutral-200 bg-white shadow-sm">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-100 hover:text-black"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
