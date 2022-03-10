import React from "react"

export default function Spacing({ blok: { top } }) {
  return <div className={`mt-${top}`} />
}
