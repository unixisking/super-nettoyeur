import { Link } from "gatsby"
import React from "react"

export default function Button({ to, text }) {
  return (
    <Link
      to={to}
      style={{ background: "#2C2E47" }}
      className="text-base font-medium px-5 py-2 rounded-md shadow-lg text-white"
    >
      {text}
    </Link>
  )
}
