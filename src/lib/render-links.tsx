import * as React from "react";
import Link from "next/link";

/**
 * Utility helper to parse markdown-style links [Anchor Text](/target-url) into Next.js Link components.
 */
export function renderMarkdownLinks(text: string): React.ReactNode {
  if (!text || typeof text !== "string") return text;

  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  if (!regex.test(text)) return text;

  regex.lastIndex = 0;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }
    const linkText = match[1];
    const href = match[2];
    const isInternal = href.startsWith("/") || href.startsWith("#");

    elements.push(
      isInternal ? (
        <Link
          key={`${href}-${match.index}`}
          href={href}
          className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all inline-flex items-baseline mx-0.5"
        >
          {linkText}
        </Link>
      ) : (
        <a
          key={`${href}-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all inline-flex items-baseline mx-0.5"
        >
          {linkText}
        </a>
      )
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return <>{elements}</>;
}
