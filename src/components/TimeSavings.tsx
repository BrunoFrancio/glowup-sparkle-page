import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Clock, TrendingDown, Sparkles } from "lucide-react";
import { calculateTimeSavings, formatMinutesToHours } from "@/lib/timeSavings";

export function TimeSavings() {
  const [appointmentsPerWeek, setAppointmentsPerWeek] = useState(25);
  const [minutesPerAppointment, setMinutesPerAppointment] = useState(5);

  const savings = useMemo(
    () => calculateTimeSavings(appointmentsPerWeek, minutesPerAppointment),
    [appointmentsPerWeek, minutesPerAppointment]
  );

  return (
    <section id="economia" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Quanto tempo você perde
              <span className="text-primary"> agendando pelo WhatsApp?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mova os controles e veja quanto tempo você economiza por semana e por mês.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-background rounded-3xl p-6 md:p-10 border border-border shadow-lg">
            {/* Sliders */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
              {/* Appointments slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-medium text-foreground">
                    Agendamentos por semana
                  </label>
                  <span className="text-2xl font-semibold text-primary">
                    {appointmentsPerWeek}
                  </span>
                </div>
                <Slider
                  value={[appointmentsPerWeek]}
                  onValueChange={([value]) => setAppointmentsPerWeek(value)}
                  min={5}
                  max={60}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5</span>
                  <span>60</span>
                </div>
              </div>

              {/* Minutes slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-medium text-foreground">
                    Minutos por agendamento (WhatsApp)
                  </label>
                  <span className="text-2xl font-semibold text-primary">
                    {minutesPerAppointment} min
                  </span>
                </div>
                <Slider
                  value={[minutesPerAppointment]}
                  onValueChange={([value]) => setMinutesPerAppointment(value)}
                  min={2}
                  max={15}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>2 min</span>
                  <span>15 min</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {/* Current time */}
              <div className="p-6 rounded-2xl bg-muted/50 text-center">
                <Clock className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">
                  Tempo atual/semana
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-foreground">
                  {formatMinutesToHours(savings.currentTimeMinutes)}
                </p>
              </div>

              {/* GLOWUP time */}
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">
                  Com GLOWUP/semana
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-primary">
                  {formatMinutesToHours(savings.glowupTimeMinutes)}
                </p>
              </div>

              {/* Savings */}
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground text-center">
                <TrendingDown className="w-8 h-8 mx-auto mb-3" />
                <p className="text-sm opacity-90 mb-1">
                  Economia/mês
                </p>
                <p className="text-2xl md:text-3xl font-semibold">
                  {savings.savingsHoursPerMonth}h
                </p>
              </div>
            </div>

            {/* Message */}
            <p className="text-center mt-8 text-muted-foreground">
              São <span className="font-semibold text-foreground">{savings.savingsHoursPerMonth} horas por mês</span> que você pode usar para atender mais clientes, descansar ou cuidar de você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
