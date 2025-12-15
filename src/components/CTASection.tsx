import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email("Digite um email válido");

export function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setStatus("error");
      setErrorMessage(result.error.errors[0].message);
      return;
    }

    const WAITLIST_ENDPOINT =
      "https://script.google.com/macros/s/AKfycbwo7PKy91155pNL0aPwQ9ToOtuqpUAtdWHpSvkHr6BsRuCSNCTH3ACyNoD8ycDV8_7k/exec";

    try {
      setIsSubmitting(true);

      await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          email,
          source: "hero",
        }),
      });

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Falha ao salvar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorId = status === "error" ? "cta-email-error" : undefined;

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <h2 className="font-brand text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Pronta para brilhar?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Entre na lista de espera e seja a primeira a saber quando o GLOWUP lançar. É grátis.
          </p>

          {/* Email Form */}
          {status === "success" ? (
            <div
              className="flex items-center justify-center gap-3 p-6 bg-card rounded-2xl border border-primary/20 animate-scale-in max-w-md mx-auto"
              role="status"
              aria-live="polite"
            >
              <CheckCircle className="w-6 h-6 text-primary" />
              <p className="text-lg font-medium text-foreground">
                Você está na lista!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus("idle");
                    setErrorMessage("");
                  }}
                  aria-invalid={status === "error"}
                  aria-describedby={errorId}
                  className={`h-12 text-base bg-card ${
                    status === "error" ? "border-destructive" : ""
                  }`}
                />
                {status === "error" && (
                  <p
                    id={errorId}
                    className="text-sm text-destructive mt-1 text-left"
                    role="alert"
                  >
                    {errorMessage}
                  </p>
                )}
              </div>
              <Button type="submit" size="lg" className="h-12 px-8">
                Entrar na lista
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
