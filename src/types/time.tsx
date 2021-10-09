export interface TimeEntryData {
  taskName?: string;
  startTime?: string;
  endTime?: string;
  diff?: string;
}

export interface TimeEntryHeaderData {
  taskNameLabel?: string;
  startTimeLabel?: string;
  endTimeLabel?: string;
  diffLabel?: string;
}

export interface DayViewData {
  date: string;
  total?: string;
  target?: string;
  entries?: TimeEntryData[];
}

export interface MonthViewData {
  year?: number;
  month?: number;
  days?: DayViewData[];
}
