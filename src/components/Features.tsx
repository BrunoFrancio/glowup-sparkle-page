import { Link, RefreshCw, Bell, Calendar, Clock, Sparkles } from "lucide-react";
import { features } from "@/content/landing";

const iconMap = {
  Link,
  RefreshCw,
  Bell,
  Calendar,
  Clock,
  Sparkles,
};

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Tudo que você precisa.
            <span className="text-primary"> Nada que não precisa.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Funcionalidades pensadas para profissionais solo que querem simplicidade e eficiência.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.title}
                className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
