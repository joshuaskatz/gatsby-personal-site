import React, { PropsWithChildren } from 'react'

export default function SoftwareSection({ children, section }: PropsWithChildren & { section: string }) {
  return (
    <div id={section} className="w-full h-fit px-2 md:px-5">
      <div className=" w-full flex flex-row h-full items-center">
        <div className="text-4xl ">{section}</div>
      </div>
      {children}
    </div>
  )
}
