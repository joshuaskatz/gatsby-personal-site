import React from "react";

export default function ImageText({
  title,
  description,
  sub,
}: {
  title: string;
  description: string;
  sub?: string;
}) {
  return (
    <div className="ml-2 mb-8 md:ml-5 w-fit">
      <div className="text-5xl font-light">{title}</div>
      <div className="text-xl">{description}</div>
      {sub && <div className="text-xl">{sub}</div>}
    </div>
  );
}
