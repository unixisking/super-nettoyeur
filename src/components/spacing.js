import React from "react"

export default function Spacing({ blok: { top } }) {
  return <div className={`hidden lg:block mt-${top}`} />
}
