import React from "react";

export default function ImageText({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-fit">
      <div className="text-5xl font-light">{title}</div>
      <div className="text-2xl font-light">{description}</div>
    </div>
  );
}
