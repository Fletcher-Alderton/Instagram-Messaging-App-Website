"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface TextPopupProps {
  trigger: React.ReactNode // Node to trigger the dialog (e.g., a Button or Link)
  title: string
  content: React.ReactNode // Can be simple string or JSX
}

export default function TextPopup({ trigger, title, content }: TextPopupProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Render the provided trigger element */}
        {trigger} 
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black border-[#7c999d] text-[#ede8e7]">
        <DialogHeader>
          <DialogTitle className="text-[#ede8e7]">{title}</DialogTitle>
        </DialogHeader>
        <div className="py-4 text-[#ede8e7]/80">
          {/* Render the provided content */}
          {content}
        </div>
      </DialogContent>
    </Dialog>
  )
} 