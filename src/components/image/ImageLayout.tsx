import React, { PropsWithChildren } from "react";

export default function ImageLayout({
  children,
  index = 0,
}: PropsWithChildren & { index?: number }) {
  return (
    <div
      className={`m-3 ${index % 2 === 0 ? "ltr" : "rtl"} ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      {children}
    </div>
  );
}
