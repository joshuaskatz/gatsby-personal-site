import React from 'react'

interface ImageTextProps {
  title: string
  description: string
  sub?: string
}

export default function ImageText({ title, description, sub }: ImageTextProps) {
  return (
    <div className="mx-2 mb-8 md:mx-5 w-fit">
      <div className="text-5xl font-light">{title}</div>
      <div className="text-xl">{description}</div>
      {sub && <div className="text-lg">{sub}</div>}
    </div>
  )
}
