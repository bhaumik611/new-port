"use client";

import React from "react";

interface EmbedProps {
  type: "youtube" | "vimeo" | "tweet";
  id: string;
  title?: string;
  caption?: string;
}

export function Embed({ type, id, title = "Embedded Media", caption }: EmbedProps) {
  let src = "";
  if (type === "youtube") {
    src = `https://www.youtube-nocookie.com/embed/${id}`;
  } else if (type === "vimeo") {
    src = `https://player.vimeo.com/video/${id}`;
  }

  return (
    <figure className="my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl hairline-border bg-neutral-950">
        {type === "youtube" || type === "vimeo" ? (
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : (
          <div className="p-6 text-center text-sm text-neutral-400">
            Tweet Embed ID: {id}
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-neutral-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
