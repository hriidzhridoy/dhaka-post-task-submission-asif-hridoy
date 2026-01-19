"use client";

import Link from "next/link";
import { Facebook, Twitter, Rss } from "lucide-react";

type FooterLink = { label: string; href: string };
type RecentItem = { title: string; href: string; date: string };

type SiteFooterProps = {
  brandTitle?: string;
  aboutText?: string;
  aboutLink?: FooterLink;

  recentTitle?: string;
  recent?: RecentItem[];

  categoriesTitle?: string;
  categoriesLeft?: FooterLink[];
  categoriesRight?: FooterLink[];

  newsletterTitle?: string;
  newsletterText?: string;
  onNewsletterSubmit?: (email: string) => void;

  copyrightLeft?: string;
};

export default function SiteFooter({
  brandTitle = "THE DOWNTOWN",
  aboutText = "We bring you the best Premium WordPress Themes that perfect for news, magazine, personal blog, etc. Visit our landing page to see all features & demos.",
  aboutLink = { label: "LEARN MORE »", href: "#" },

  recentTitle = "Recent News",
  recent = [
    {
      title:
        "Grab tackles Jakarta’s odd-even license plate policy with special algorithm",
      href: "#",
      date: "July 6, 2018",
    },
    {
      title:
        "Jokowi supporters try to prevent anti-Jokowi activist from entering Batam",
      href: "#",
      date: "July 5, 2018",
    },
    {
      title: "China To Build Indonesia’s Longest Bridge In North Kalimantan",
      href: "#",
      date: "July 4, 2018",
    },
  ],

  categoriesTitle = "Categories",
  categoriesLeft = [
    { label: "Business", href: "/business" },
    { label: "Culture", href: "/culture" },
    { label: "Lifestyle", href: "/lifestyle" },
    { label: "National", href: "/national" },
    { label: "World", href: "/world" },
  ],
  categoriesRight = [
    { label: "Opinion", href: "/opinion" },
    { label: "Politics", href: "/politics" },
    { label: "Sports", href: "/sports" },
    { label: "Travel", href: "/travel" },
    { label: "News", href: "/news" },
  ],

  newsletterTitle = "Sign Up For Our Newsletter",
  newsletterText = "Subscribe to our mailing list to receives daily updates direct to your inbox!",
  onNewsletterSubmit,

  copyrightLeft = "© 2018 JNews - City News Magazine WordPress theme. All rights belong to their respective owners.",
}: SiteFooterProps) {
  return (
    <footer className="bg-white text-neutral-900">
      {/* Top */}
      <div className="px-4 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-lg font-extrabold tracking-wide">
              {brandTitle}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              {aboutText}
            </p>
            <Link
              href={aboutLink.href}
              className="mt-3 inline-flex text-xs font-semibold tracking-wide text-neutral-900 hover:underline"
            >
              {aboutLink.label}
            </Link>
          </div>

          {/* Recent News */}
          <div>
            <h4 className="text-sm font-bold text-neutral-900">
              {recentTitle}
            </h4>
            <ul className="mt-4 space-y-4">
              {recent.map((r, idx) => (
                <li key={idx} className="text-sm">
                  <Link
                    href={r.href}
                    className="font-semibold text-neutral-900 hover:underline"
                  >
                    {r.title}
                  </Link>
                  <div className="mt-1 text-xs text-neutral-500">{r.date}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories (2 columns) */}
          <div>
            <h4 className="text-sm font-bold text-neutral-900">
              {categoriesTitle}
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-x-10">
              <ul className="space-y-2">
                {categoriesLeft.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className="text-sm font-semibold text-neutral-900 hover:underline"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {categoriesRight.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className="text-sm font-semibold text-neutral-900 hover:underline"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-neutral-900">
              {newsletterTitle}
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              {newsletterText}
            </p>

            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);
                const email = String(fd.get("email") ?? "");
                onNewsletterSubmit?.(email);
                form.reset();
              }}
            >
              <input
                name="email"
                type="email"
                required
                placeholder="Your email address"
                className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
              />
              <button
                type="submit"
                className="w-full bg-neutral-900 px-4 py-3 text-sm font-bold tracking-wide text-white hover:bg-black"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-neutral-200" />

      {/* Bottom bar */}
      <div className="px-4 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-neutral-600">
            <p>{copyrightLeft}</p>
            <p className="mt-1">
              JNews is a top selling 2018 WordPress News, Blog, Newspaper &amp;
              Magazine Theme.
            </p>
          </div>

          <div className="flex items-center gap-4 text-neutral-900">
            <Link href="#" aria-label="Facebook" className="hover:opacity-70">
              <Facebook size={18} />
            </Link>
            <Link
              href="#"
              aria-label="Twitter / X"
              className="hover:opacity-70"
            >
              <Twitter size={18} />
            </Link>
            <Link href="#" aria-label="RSS" className="hover:opacity-70">
              <Rss size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
