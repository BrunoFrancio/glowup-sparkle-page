import { testimonials } from "@/content/landing";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Quem já experimentou,
            <span className="text-primary"> não volta atrás.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais que testaram o GLOWUP em fase beta.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-border"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              
              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
