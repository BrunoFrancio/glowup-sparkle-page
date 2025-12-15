export interface TimeSavingsResult {
  currentTimeMinutes: number;
  glowupTimeMinutes: number;
  savingsMinutes: number;
  savingsHoursPerWeek: number;
  savingsHoursPerMonth: number;
}

export const GLOWUP_TIME_PER_APPOINTMENT = 1; // 1 minuto por agendamento com GLOWUP

export function calculateTimeSavings(
  appointmentsPerWeek: number,
  minutesPerAppointment: number
): TimeSavingsResult {
  const currentTimeMinutes = appointmentsPerWeek * minutesPerAppointment;
  const glowupTimeMinutes = appointmentsPerWeek * GLOWUP_TIME_PER_APPOINTMENT;
  const savingsMinutes = currentTimeMinutes - glowupTimeMinutes;
  const savingsHoursPerWeek = savingsMinutes / 60;
  const savingsHoursPerMonth = savingsHoursPerWeek * 4;

  return {
    currentTimeMinutes,
    glowupTimeMinutes,
    savingsMinutes,
    savingsHoursPerWeek: Math.round(savingsHoursPerWeek * 10) / 10,
    savingsHoursPerMonth: Math.round(savingsHoursPerMonth * 10) / 10,
  };
}

export function formatMinutesToHours(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours}h`;
  }
  return `${hours}h ${remainingMinutes}min`;
}
