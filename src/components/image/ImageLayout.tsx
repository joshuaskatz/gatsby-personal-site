import React, { PropsWithChildren } from "react";

export default function ImageLayout({ children }: PropsWithChildren) {
  return <div className={`m-3 flex`}>{children}</div>;
}
