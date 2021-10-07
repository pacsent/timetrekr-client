export interface TimeRowData {
  taskName?: string;
  startTime?: string;
  endTime?: string;
  diff?: string;
}

export interface TimeRowHeaderData {
  taskNameLabel?: string;
  startTimeLabel?: string;
  endTimeLabel?: string;
  diffLabel?: string;
}

export interface DayViewData {
  date: string;
  total: string;
  target: string;
  rows?: TimeRowData[];
}

export interface MonthViewData {
  year: number;
  month: number;
  days?: DayViewData[];
}
