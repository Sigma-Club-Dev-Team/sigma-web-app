"use client";

import { Check, Link2 } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

/**
 * The club's own social marks, redrawn from public/assets/icons so they take
 * their colour from the button around them instead of being locked to white.
 */
const MARKS = {
  x: "M14.7394 2.55249L10.5761 7.31166L6.97609 2.55249H1.76025L7.99109 10.6992L2.08609 17.4483H4.61442L9.17192 12.24L13.1553 17.4483H18.2403L11.7453 8.86166L17.2661 2.55249H14.7394ZM13.8528 15.9358L4.71192 3.98499H6.21442L15.2528 15.935L13.8528 15.9358Z",
  facebook:
    "M11.6668 11.25H13.7501L14.5834 7.91666H11.6668V6.24999C11.6668 5.39166 11.6668 4.58333 13.3334 4.58333H14.5834V1.78333C14.3118 1.74749 13.2859 1.66666 12.2026 1.66666C9.9401 1.66666 8.33344 3.04749 8.33344 5.58333V7.91666H5.83344V11.25H8.33344V18.3333H11.6668V11.25Z",
  linkedin:
    "M15.28 15.2825H13.0592V11.8017C13.0592 10.9717 13.0425 9.90333 11.9008 9.90333C10.7433 9.90333 10.5667 10.8067 10.5667 11.7408V15.2825H8.345V8.125H10.4783V9.1H10.5075C10.8058 8.53833 11.5308 7.94417 12.6142 7.94417C14.8642 7.94417 15.2808 9.42583 15.2808 11.3542L15.28 15.2825ZM5.83667 7.14583C5.66713 7.14605 5.49922 7.11281 5.34255 7.04801C5.18589 6.9832 5.04356 6.88812 4.92371 6.7682C4.80387 6.64828 4.70888 6.50588 4.64418 6.34918C4.57947 6.19247 4.54634 6.02454 4.54667 5.855C4.54683 5.59986 4.62265 5.3505 4.76453 5.13846C4.90642 4.92641 5.108 4.76119 5.34377 4.66371C5.57955 4.56623 5.83895 4.54085 6.08915 4.59078C6.33935 4.64072 6.56913 4.76373 6.74942 4.94426C6.92972 5.12478 7.05243 5.35472 7.10204 5.60498C7.15166 5.85525 7.12594 6.11461 7.02815 6.35026C6.93036 6.58592 6.76489 6.78728 6.55266 6.92889C6.34043 7.0705 6.09097 7.146 5.83583 7.14583M6.94917 15.2825H4.7225V8.125H6.95L6.94917 15.2825ZM16.3917 2.5H3.60833C2.995 2.5 2.5 2.98333 2.5 3.58083V16.4192C2.5 17.0167 2.995 17.5 3.60667 17.5H16.3892C17 17.5 17.5 17.0167 17.5 16.4192V3.58083C17.5 2.98417 17 2.5 16.3883 2.5H16.3917Z",
} as const;

/**
 * The address being shared. Read straight off `location` rather than mirrored
 * into state: the server has no URL to render, so the first paint falls back to
 * an empty string and hydration fills it in.
 */
function subscribeToLocation(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

const readLocation = () => window.location.href;
const noLocation = () => "";

function Mark({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 20 20" className="size-4 fill-current" aria-hidden>
      <path d={path} />
    </svg>
  );
}

const buttonStyle =
  "flex items-center justify-center size-10 border border-border text-secondary hover:text-white hover:bg-sigma-purple hover:border-sigma-purple transition-colors duration-200 cursor-pointer";

function ArticleShare({
  title,
  orientation = "vertical",
  className,
}: {
  title: string;
  orientation?: "vertical" | "horizontal";
  className?: string;
}) {
  const url = useSyncExternalStore(subscribeToLocation, readLocation, noLocation);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "Share on X",
      href: `https://x.com/intent/post?url=${encodedUrl}&text=${encodedTitle}`,
      mark: MARKS.x,
    },
    {
      name: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      mark: MARKS.facebook,
    },
    {
      name: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      mark: MARKS.linkedin,
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url || window.location.href);
      setCopied(true);
    } catch {
      // Clipboard access can be refused; the address bar still has the link.
    }
  };

  const isVertical = orientation === "vertical";

  return (
    <div
      className={cn(
        "flex gap-4",
        isVertical ? "flex-col items-start" : "flex-row items-center",
        className,
      )}
    >
      <p className="text-secondary uppercase text-[0.6875rem] tracking-[0.2em]">
        Share
      </p>

      <ul
        className={cn("flex gap-2", isVertical ? "flex-col" : "flex-row")}
        aria-label="Share this article"
      >
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              aria-label={link.name}
              className={buttonStyle}
            >
              <Mark path={link.mark} />
            </a>
          </li>
        ))}

        <li>
          <button
            type="button"
            onClick={copy}
            title="Copy link"
            aria-label={copied ? "Link copied" : "Copy link"}
            className={cn(
              buttonStyle,
              copied && "text-sigma-gold border-sigma-gold",
            )}
          >
            {copied ? (
              <Check size={16} aria-hidden />
            ) : (
              <Link2 size={16} aria-hidden />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ArticleShare;
