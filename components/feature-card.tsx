import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
}

export default function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <Card
      className="bg-black/30 border border-[#ede8e7]/10 hover:border-[color:var(--hover-color)] transition-all duration-300 overflow-hidden group flex flex-col h-full"
      style={{ "--hover-color": color } as any}
    >
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-[#ede8e7]/70">{description}</p>
      </CardContent>
      <div
        className="h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ backgroundColor: color }}
      />
    </Card>
  )
}

