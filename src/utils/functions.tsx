import { DateTime } from 'luxon';

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

export function diffHours(startTime: string, endTime: string): string {
  return '';
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
