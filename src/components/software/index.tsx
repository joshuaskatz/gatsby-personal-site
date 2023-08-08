import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { animated, useSpring } from 'react-spring'

export default function SoftwareSection({ children, section }: PropsWithChildren & { section: string }) {
  const [open, setOpen] = useState(true)

  const ref = useRef<HTMLDivElement>(null)
  const [contentMaxHeight, setContentMaxHeight] = useState(0)

  useEffect(() => {
    const calcContentMaxHeight = () => {
      ref.current && setContentMaxHeight(ref.current.scrollHeight)
    }

    calcContentMaxHeight()

    window.addEventListener('resize', () => calcContentMaxHeight())

    return () => window.removeEventListener('resize', calcContentMaxHeight)
  }, [ref, contentMaxHeight])

  const props = useSpring({
    opacity: open ? 1 : 0,
    maxHeight: open ? `${contentMaxHeight}px` : '0px',
    config: { duration: 300 },
  })

  return (
    <div id={section} className="w-full h-fit">
      <div
        onClick={() => setOpen(!open)}
        className="p-2 w-full flex flex-row h-full items-center justify-between cursor-pointer"
      >
        <div className="text-4xl">{section}</div>
        <FaChevronDown size={28} />
      </div>
      <div ref={ref}>{<animated.div style={{ ...props }}>{children}</animated.div>}</div>
    </div>
  )
}
