import type { LeasingResult } from "./types";

const ANNUAL_RATE = 0.09;
const TERM_MONTHS = 60;

export function calculateLeasing(
  vehiclePrice: number,
  downPayment: number,
  termMonths = TERM_MONTHS
): LeasingResult {
  const principal = Math.max(0, vehiclePrice - downPayment);
  const monthlyRate = ANNUAL_RATE / 12;

  if (principal <= 0) {
    return {
      monthlyPayment: 0,
      totalMonths: termMonths,
      interestRate: ANNUAL_RATE * 100,
      totalAmount: 0,
    };
  }

  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1);

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalMonths: termMonths,
    interestRate: ANNUAL_RATE * 100,
    totalAmount: Math.round(monthlyPayment * termMonths + downPayment),
  };
}

/** Alias for calculator UI */
export const calcLeasing = calculateLeasing;
