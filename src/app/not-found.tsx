import Link from "next/link";
import { Github } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-neutral-900 px-4">
      <div className="mx-auto max-w-xl text-center text-white">
        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold tracking-tight">404</h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl font-semibold">
          Oops… this page went missing 🕵️‍♂️
        </p>

        {/* Message */}
        <p className="mt-6 text-sm leading-relaxed text-neutral-300">
          This page doesn’t exist — and yes, that’s intentional.
          <br />
          <span className="font-medium text-white">
            This project is a submission test.
          </span>
        </p>

        {/* Funny twist */}
        <p className="mt-4 text-sm leading-relaxed text-neutral-300">
          Want more pages like this?
          <br />
          <span className="font-semibold text-white">
            Hire me and I’ll happily build the rest 😉
          </span>
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-sm border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-neutral-900"
          >
            Back to Home
          </Link>

          <a
            href="mailto:amamunhridoy@gmail.com"
            className="inline-flex items-center rounded-sm border border-neutral-600 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-white hover:text-white"
          >
            Hire Me ✨
          </a>

          {/* GitHub Repo */}
          <a
            href="https://github.com/hriidzhridoy/dhaka-post-task-submission-asif-hridoy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-neutral-600 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-white hover:text-white"
          >
            <Github size={18} />
            View on GitHub
          </a>
        </div>

        {/* Tiny footer joke */}
        <p className="mt-10 text-xs text-neutral-500">
          Error code:{" "}
          <span className="font-mono">PAGE_NOT_FOUND_BUT_SKILLS_ARE</span>
        </p>
      </div>
    </div>
  );
}
