export interface TimeEntryData {
  id?: string;
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

export interface DayData {
  id?: string;
  date: string;
  total?: number;
  target?: string;
  entries?: TimeEntryData[];
}

export interface MonthData {
  id?: string;
  year?: number;
  month?: number;
  yearMonth?: string;
  days?: DayData[];
}

export type YearMonth = `${number}-${
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'}`;

export type EntryField = 'taskName' | 'startTime' | 'endTime';
