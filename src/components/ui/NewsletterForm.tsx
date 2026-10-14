"use client";

import React, { useState } from "react";
import EclipseButton from "./eclipse-button";
import { toast } from "sonner";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    const toastId = toast.loading("Subscribing to newsletter...");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || `Subscription failed (HTTP ${res.status})`);
      }

      setStatus("success");
      setName("");
      setEmail("");
      toast.success("Successfully subscribed!", {
        id: toastId,
        description: "Welcome to the Cafe Innovate Hub community newsletter.",
      });
    } catch (error: any) {
      setStatus("error");
      toast.error(error.message || "Failed to subscribe. Please try again.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="w-full max-w-xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "loading"}
            placeholder="Your name"
            required
            className="w-full sm:w-44 px-4 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 focus:ring-2 focus:ring-cihLightBlue focus:border-cihLightBlue outline-none text-base placeholder:text-slate-400 transition-all font-sans"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            placeholder="Your email address"
            required
            className="w-full sm:w-64 px-4 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 focus:ring-2 focus:ring-cihLightBlue focus:border-cihLightBlue outline-none text-base placeholder:text-slate-400 transition-all font-sans"
          />
          <EclipseButton
            type="submit"
            variant="yellow"
            disabled={status === "loading"}
            className="w-full sm:w-auto px-6 py-3 font-bold text-sm shadow-md shrink-0 justify-center"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </EclipseButton>
        </div>
        {status === "success" && (
          <p className="text-sm font-medium text-emerald-400 pl-1">
            ✓ Thanks for subscribing! You are now on our list.
          </p>
        )}
      </form>
    </div>
  );
}
