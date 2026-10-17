"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import EclipseButton from "@/components/ui/eclipse-button";

interface CopyEmailButtonProps {
  email?: string;
  text?: string;
  className?: string;
}

export default function CopyEmailButton({
  email = "cafeinnovatehub@gmail.com",
  text = "Send with PayPal",
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const emailToCopy = email || "cafeinnovatehub@gmail.com";
      await navigator.clipboard.writeText(emailToCopy);
      setCopied(true);
      toast.success("Email copied successfully!");
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy email to clipboard:", err);
      toast.error("Failed to copy email.");
    }
  };

  return (
    <EclipseButton
      type="button"
      onClick={handleCopy}
      variant="outline"
      className={`py-4 px-8 text-lg font-bold w-full sm:w-auto shadow-lg hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      <span className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-cihBlue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {copied ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          )}
        </svg>
        {copied ? "Email Copied!" : text}
      </span>
    </EclipseButton>
  );
}
