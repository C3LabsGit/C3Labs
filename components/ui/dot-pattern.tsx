"use client"

export default function DotPattern() {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
    />
  )
}
