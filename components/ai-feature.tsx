"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AiFeatureProps {
  title: string
  description: string
  icon: ReactNode
}

export default function AiFeature({ title, description, icon }: AiFeatureProps) {
  return (
    <motion.div
      className="flex gap-6 p-6 rounded-xl bg-gradient-to-br from-black/50 to-black/20 border border-[#ede8e7]/10 hover:border-[#7c999d]/50 transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#7c999d]/20 flex items-center justify-center text-[#7c999d]">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-[#ede8e7]/70">{description}</p>
      </div>
    </motion.div>
  )
}

