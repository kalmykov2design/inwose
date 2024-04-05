export type TaskType = "personal" | "pari" | "team"
export type TaskCategory = "qualification" | "outlook"
export type SizeType = "sm" | "md" | "lg";

export type CoinColors = "green" | "red"

export interface CoinsProps {
  hasPlus?: boolean;
  hasBg?: boolean;
  coinsAmount: number;
  coinsNotEarnedAmount?: number;
  coinColor?: CoinColors;
}

export interface TaskProps {
  sizeName: SizeType;
  taskType: TaskType;
  coins: CoinsProps;
  categoryName: TaskCategory;
  taskName: string;
  taskDescr?: string;
  deadline?: number;
  dateOfComplete?: string;
  taskStatus: string;
  timeForComplete?: string;
}