export interface Stat {
  num: number;
  suffix: string;
  label: string;
  display?: string;
}

export const stats: Stat[] = [
  { num: 100, suffix: '%', label: 'Open Source' },
  { num: 21, suffix: '', label: 'Días para crear un hábito' },
  { num: 7, suffix: '', label: 'Categorías de hábitos' },
  { num: 0, suffix: '', label: 'Costo — Para siempre', display: 'Free' },
];
