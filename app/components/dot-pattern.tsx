export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-1.5 ${className}`}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#4E3BF1]" />
      ))}
    </div>
  )
}

