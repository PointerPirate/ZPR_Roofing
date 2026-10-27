"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

export function DontSeeYourTown() {
  const [formData, setFormData] = useState({ name: "", phone: "", town: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const projectBody = `[Address check inquiry — "Don't See Your Town" form]\n\nTown or ZIP code: ${formData.town}\n\nMessage: ${formData.message || "(none)"}`;
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: `${formData.name.trim().toLowerCase().replace(/\s+/g, ".")}@no-email-provided.local`,
          phone: formData.phone,
          project: projectBody,
        }),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", town: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Check your address
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-balance mb-4">
            Don't See Your Town Listed?
          </h2>
          <p className="text-muted-foreground text-balance max-w-xl mx-auto">
            We serve a wide area around Rockford, and many towns are not listed here. Send us your address and we will let
            you know if we can help. There is no pressure and no obligation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-background rounded-2xl p-6 md:p-8 border border-border">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 rounded-xl bg-secondary border-0 px-5"
              required
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12 rounded-xl bg-secondary border-0 px-5"
              required
            />
          </div>
          <Input
            placeholder="Town or ZIP code"
            value={formData.town}
            onChange={(e) => setFormData({ ...formData, town: e.target.value })}
            className="h-12 rounded-xl bg-secondary border-0 px-5"
            required
          />
          <Textarea
            placeholder="Message (optional)"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="rounded-xl bg-secondary border-0 px-5 py-3 resize-none"
          />
          <Button type="submit" size="lg" className="w-full h-12 rounded-xl" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Check My Address"}
          </Button>
          {status === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800 text-sm font-medium">
                Thanks — we received your request and will be in touch shortly to let you know if we can help.
              </p>
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 text-sm font-medium">
                Something went wrong. Please call us at (815) 904-9777 or try again.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
