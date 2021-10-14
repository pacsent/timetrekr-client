import { DateTime } from 'luxon';
import { DayData, EntryField, MonthData, TimeEntryData } from 'types/time';

export function tsToTime(timestamp: string | undefined): string {
  if (timestamp === undefined || timestamp.trim() === '') return '';
  const d = DateTime.fromISO(timestamp).toObject();
  if (d.hour === undefined) {
    return '';
  }
  const hour = d.hour < 10 ? leftpad(d.hour, 2, '0') : d.hour;
  const minute = leftpad(d.minute, 2, '0');
  const time = `${hour}:${minute}`;
  return time;
}

export function recalculateMonth(data?: MonthData): MonthData | undefined {
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
  if (data === _data) return data;

  return _data;
}

export function diffToMins(startTime?: string, endTime?: string): number {
  const start = DateTime.fromISO(startTime || '');
  const end = DateTime.fromISO(endTime || '');
  const diff = start.isValid && end.isValid && end.diff(start, 'minutes');
  return diff && diff.minutes > 0 ? diff.minutes : 0;
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

function leftpad(str: string | number, length: number, char = ' ') {
  str = String(str);

  length -= str.length;
  let i = -1;

  while (++i < length) {
    str = char + str;
  }

  return str;
}

function rightpad(str: string | number, length: number, char = ' ') {
  str = String(str);

  length -= str.length;
  let i = -1;

  while (++i < length) {
    str += char;
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
  if (type === 'time') {
    if (value === '') {
      return ':';
    }
    let formatted = timify(value).replace(/:+/g, '');
    if (formatted.length < 4) {
      rightpad(formatted, 4, '0');
    }

    formatted = `${formatted.slice(0, 2)}:${formatted.slice(2)}`;

    if (formatted.match(HHmmRegex)) {
      return formatted;
    } else {
      return ':';
    }
  }
  return value;
}

export function hourify(time: string): string {
  let t = time.trim().replace(/[^\d]+/g, '');
  if (t.length === 1) {
    if (t.match(/[3-9]/)) return leftpad(t, 2, '0');
    return t;
  }
  if (t.length > 1) {
    t = t.substr(0, 2);
    if (Number(t) > 23) {
      return leftpad(t.substr(0, 1), 2, '0');
    }
  }
  return t;
}

export function minutify(time: string): string {
  let t = time.trim().replace(/[^\d]+/g, '');
  if (t.length === 1) {
    if (t.match(/[6-9]/)) return leftpad(t, 2, '0');
    return t;
  }
  if (t.length > 1) {
    t = t.substr(0, 2);
    if (Number(t) > 59) {
      return leftpad(t.substr(0, 1), 2, '0');
    }
  }
  return t;
}

export function timify(time: string): string {
  let t = time.trim().replace(/[^\d:]+/g, '');
  // .replace(/::+/g, ':');

  if (t.length === 1) {
    if (t === ':') return '';
    if (t.match(/[3-9]/)) return `${leftpad(t, 2, '0')}:`;
    return t;
  }

  if (t.length === 2) {
    if (t.match(/[3-9]/)) return `${leftpad(t, 2, '0')}:`;
    return t;
  }

  if ((t.match(/[0-9]/g) || []).length > 4) {
    t = t.substring(0, 4);
  }

  return t;
}

export function initMonthData(): MonthData {
  const date = new Date();
  const monthData: MonthData = {
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
  return DateTime.now().toFormat("yyyy-MM-dd'T'HH:mm");
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

export function updateMonthData(
  value: string,
  field: EntryField,
  monthData?: MonthData,
  data?: TimeEntryData,
  date?: string
): MonthData | undefined {
  const newMonthData = deepClone(monthData);
  newMonthData?.days?.forEach((day: DayData) => {
    if (day.date === date) {
      day.entries?.forEach((entry: TimeEntryData) => {
        if (entry.id === data?.id) {
          if (field === 'startTime') {
            entry[field] = timeToTs(value, date);
          } else if (field === 'endTime' && entry[field] !== 'now') {
            entry[field] = timeToTs(value, date);
          } else {
            entry[field] = value;
          }
        }
      });
    }
  });

  return recalculateMonth(newMonthData);
}

export const HHmmRegex = /(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/;

export const tsRegex = /(20[0-9][0-9])-(0[1-9]|1[1-2])/;
