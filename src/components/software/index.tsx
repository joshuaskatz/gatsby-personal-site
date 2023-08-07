import React, { PropsWithChildren, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function SoftwareSection({
  children,
  section,
}: PropsWithChildren & { section: string }) {
  const [open, setOpen] = useState(true);

  return (
    <div id={section} className="w-full">
      <div
        onClick={() => setOpen(!open)}
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
        >
          {children}
        </div>
      )}
    </div>
  );
}
