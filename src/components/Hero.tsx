import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Play } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email("Digite um email válido");

export function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    
    if (!result.success) {
      setStatus("error");
      setErrorMessage(result.error.errors[0].message);
      return;
    }

    // Simula sucesso (sem backend)
    setStatus("success");
    setEmail("");
  };

  const errorId = status === "error" ? "hero-email-error" : undefined;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-peach/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">
              Em breve para profissionais solo
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-brand text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in-up">
            Sua agenda brilhando.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Sem troca infinita de mensagens.
          </p>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Clientes agendam pelo link, recebem confirmação e podem remarcar sozinhos — você só atende.
          </p>

          {/* Email Form */}
          {status === "success" ? (
            <div
              className="flex items-center justify-center gap-3 p-6 bg-card rounded-2xl border border-primary/20 animate-scale-in"
              role="status"
              aria-live="polite"
            >
              <CheckCircle className="w-6 h-6 text-primary" />
              <p className="text-lg font-medium text-foreground">
                Você está na lista! Avisaremos quando lançarmos.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
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

          {/* Secondary CTA */}
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Play className="w-4 h-4" />
              Ver demo (2 min)
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">500+</span>
              <span>profissionais interessados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">70%</span>
              <span>menos no-shows</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">8h/mês</span>
              <span>economizadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
