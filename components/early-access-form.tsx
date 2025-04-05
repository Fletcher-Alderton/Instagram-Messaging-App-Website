"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function EarlyAccessForm() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    // *** IMPORTANT: Replace with your actual Web3Forms Access Key ***
    // *** Consider using environment variables for security ***
    formData.append("access_key", "69894c85-3c7d-433a-9586-8e065c73567f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        console.error("Web3Forms Error:", data);
        setResult(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Submission Fetch Error:", error);
      setResult("Could not submit form. Check console.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="col-span-4"
          required
          disabled={result === "Sending...."}
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-[#c7b3b4] hover:bg-[#c7b3b4]/90 text-black disabled:opacity-50"
        disabled={result === "Sending...."}
      >
        {result === "Sending...." ? "Sending..." : "Request Access"}
      </Button>
      {result && (
        <span className={`text-sm mt-2 ${result.includes("Successfully") ? 'text-green-500' : 'text-red-500'}`}>
          {result}
        </span>
      )}
    </form>
  )
} 