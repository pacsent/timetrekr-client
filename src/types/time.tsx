export interface TimeEntryData {
  taskName?: string;
  startTime?: string;
  endTime?: string;
  diff?: number;
}

export interface TimeEntryHeaderData {
  taskNameLabel?: string;
  startTimeLabel?: string;
  endTimeLabel?: string;
  diffLabel?: string;
}

export interface DayViewData {
  date: string;
  total?: number;
  target?: string;
  entries?: TimeEntryData[];
}

export interface MonthViewData {
  year?: number;
  month?: number;
  days?: DayViewData[];
}
