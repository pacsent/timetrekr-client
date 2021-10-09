import { DateTime } from 'luxon';
import { MonthViewData, TimeEntryData } from 'types/time';

export function tsToHour(timestamp: string | undefined): string {
  console.log({ timestamp });
  if (timestamp === undefined || timestamp.trim() === '') return ':';
  const d = DateTime.fromISO(timestamp).toObject();
  const hours = d.hour;
  const minutes = d.minute;
  const time = `${hours}:${leftpad(minutes, 2, '0')}`;
  console.log('passed:  ', timestamp, 'd: ', d, 'time: ', time);
  return time;
}

export function stringToTime(str: string): string {
  return '';
}

export function recalculateMonth(
  data: MonthViewData | undefined
): MonthViewData | undefined {
  if (data === undefined) return undefined;
  data.days?.forEach((day) => {
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

  return {};
}

export function diffToMins(
  startTime: string | undefined,
  endTime: string | undefined
): number | undefined {
  const start = DateTime.fromISO(startTime || '');
  const end = DateTime.fromISO(endTime || '');
  const diff = start.isValid && end.isValid && end.diff(start, 'minutes');
  console.log({ start, end, diff });
  return diff ? diff.minutes : undefined;
}

export function minsToTime(minutes: number | undefined): string {
  if (minutes === undefined) return ':';
  const _minutes = Math.floor(minutes);
  const h = Math.floor(_minutes / 60);
  const m = leftpad(_minutes - h * 60, 2, '0');
  console.log({ _minutes, h, m });
  return `${h}:${m}`;
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
