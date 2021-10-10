import { DateTime } from 'luxon';
import { nanoid } from 'nanoid';
import { MonthViewData, TimeEntryData, YearMonth } from 'types/time';

export function tsToHour(timestamp: string | undefined): string {
  if (timestamp === undefined || timestamp.trim() === '') return ':';
  const d = DateTime.fromISO(timestamp).toObject();
  const hours = d.hour;
  const minutes = d.minute;
  const time = `${hours}:${leftpad(minutes, 2, '0')}`;
  return time;
}

export function stringToTime(str: string): string {
  return '';
}

export function recalculateMonth(
  data: MonthViewData | undefined
): MonthViewData | undefined {
  const s = DateTime.now();
  if (data === undefined) return undefined;

  const _data = deepClone(data);

  _data.days?.forEach((day) => {
    day.entries?.forEach((entry) => {
      entry.diff = diffToMins(entry.startTime, entry.endTime);
    });
    const reducer = (
      previousValue: TimeEntryData,
      currentValue: TimeEntryData
    ) => ({
      diff: (previousValue.diff || 0) + (currentValue.diff || 0),
    });
    const total = day?.entries?.reduce(reducer);
    day.total = total?.diff;
  });
  console.log({ s, diff: s.diffNow().milliseconds });
  const same = data === _data;
  console.log({ s, diff: s.diffNow().milliseconds });

  if (data === _data) return data;

  return _data;
}

export function diffToMins(
  startTime: string | undefined,
  endTime: string | undefined
): number | undefined {
  const start = DateTime.fromISO(startTime || '');
  const end = DateTime.fromISO(endTime || '');
  const diff = start.isValid && end.isValid && end.diff(start, 'minutes');
  return diff ? diff.minutes : undefined;
}

export function minsToTime(minutes: number | undefined): string {
  if (minutes === undefined) return ':';
  const _minutes = Math.floor(minutes);
  const h = Math.floor(_minutes / 60);
  const m = leftpad(_minutes - h * 60, 2, '0');
  const time = `${h}:${m}`;

  return time;
}

export function diffToTime(
  startTime: string | undefined,
  endTime: string | undefined
): string {
  return minsToTime(diffToMins(startTime, endTime));
}

export function isValidTimestamp(timestamp: string): boolean {
  return false;
}

function leftpad(str: string | number, length: number, char: string = ' ') {
  str = String(str);

  length = length - str.length;
  let i = -1;

  while (++i < length) {
    str = char + str;
  }

  return str;
}

export function deepClone<T>(array: T): T {
  return JSON.parse(JSON.stringify(array));
}

export function timeToTs(time: string, date: string): string {
  return `${date}T${time}`;
}

export function formatField(value: string, type: 'time'): string {
  return value;
}

export function initMonthData(): MonthViewData {
  const date = new Date();
  const monthData: MonthViewData = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    yearMonth: getYearMonth(),
    days: [],
  };

  return monthData;
}

export function getYearMonth(): string {
  return DateTime.now().toFormat('yyyy-MM');
}

export function getDate(): string {
  return DateTime.now().toFormat('yyyy-MM-dd');
}

export function getTs(): string {
  return DateTime.now().toISO();
}

export function getDateWithDay(timestamp?: string): string | undefined {
  if (timestamp === undefined) return undefined;
  return DateTime.fromISO(timestamp).toLocaleString({
    ...DateTime.DATE_MED,
    weekday: 'short',
  });
}

export function dateToYearMonth(timestamp: string): string {
  return DateTime.fromISO(timestamp).toFormat('yyyy-MM');
}

export function formatYM(year?: number, month?: number): string {
  return DateTime.fromObject({ year, month }).toFormat('yyyy-MM');
}

export function validateJson(json: string | null | undefined): any {
  if (json === null || json === undefined) return undefined;
  try {
    const parsed = JSON.parse(json);
    return parsed;
  } catch (error) {
    return undefined;
  }
}

export function validateYearMonth(yearMonth: string): string | undefined {
  return undefined;
}
