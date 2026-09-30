"use client";

import React, { useState } from "react";
import EclipseButton from "./eclipse-button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="relative flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            placeholder="Enter your email address"
            required
            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cihLightBlue focus:border-cihLightBlue outline-none transition-all text-slate-900 pr-[120px]"
          />
          <EclipseButton
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="absolute right-2 top-2 bottom-2 px-6 py-2 shadow-none"
            size="sm"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </EclipseButton>
        </div>
        {message && (
          <p
            className={`text-sm font-medium pl-1 ${
              status === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
