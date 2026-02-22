"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Please add a short message."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6">
      <div className="font-display text-xl font-extrabold">Get in touch</div>
      <p className="mt-2 text-sm text-muted">
        Join the waitlist, ask a question, or tell us what your family would love to see in a box.
      </p>

      <div className="mt-6 grid gap-4">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold">Name</label>
          <input
            id="contact-name"
            {...register("name")}
            className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-2 text-sm"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold">Email</label>
          <input
            id="contact-email"
            {...register("email")}
            className="mt-1 w-full rounded-xl border border-border bg-surface px-4 py-2 text-sm"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-semibold">Message</label>
          <textarea
            id="contact-message"
            {...register("message")}
            className="mt-1 min-h-[120px] w-full rounded-xl border border-border bg-surface px-4 py-2 text-sm"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-700">{errors.message.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="btn-primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "sent" && (
          <span className="pill animate-pop">✅ Sent! We’ll get back to you soon.</span>
        )}
        {status === "error" && (
          <span className="pill animate-pop">⚠️ Something went wrong. Please try again.</span>
        )}
      </div>

      <p className="mt-4 text-xs text-muted">
        Privacy note: this form is intended for parents/guardians. Please don’t share sensitive
        personal information.
      </p>
    </form>
  );
}
