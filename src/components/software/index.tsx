import React, { PropsWithChildren, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function SoftwareSection({
  children,
  section,
}: PropsWithChildren & { section: string }) {
  const [open, setOpen] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div id={section} className="w-full">
      <div
        onClick={() => {
          setOpen(!open);

          if (open && ref.current) {
            window.scrollTo({
              top: -ref.current.getBoundingClientRect().bottom,
            });
          }
        }}
        className="p-2 w-full flex flex-row h-full items-center justify-between cursor-pointer"
      >
        <div className="text-4xl">{section}</div>
        <FaChevronDown size={28} />
      </div>
      {open && (
        <div
          className={`transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          ref={ref}
        >
          {children}
        </div>
      )}
    </div>
  );
}
