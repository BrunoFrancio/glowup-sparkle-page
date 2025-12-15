import { howItWorks } from "@/content/landing";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Simples assim.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em 3 passos você transforma a forma como gerencia sua agenda.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative text-center">
                {/* Connector line (desktop only) */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-border" />
                )}
                
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-semibold mx-auto mb-6">
                  {item.step}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
