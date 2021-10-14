import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { HHmmRegex, hourify, minutify } from 'utils/functions';
import styles from './TimeField.module.scss';

interface Props {
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  onBlur: (value: string) => void;
}

function TimeField({
  className,
  defaultValue,
  placeholder,
  onBlur: handleParentBlur,
}: Props) {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!defaultValue || !defaultValue.match(HHmmRegex)) {
      setHour('');
      setMinute('');
      return;
    }
    const time = defaultValue?.split(':');
    setHour(time[0]);
    setMinute(time[1]);
  }, [defaultValue]);

  function handleHour(e: React.ChangeEvent<HTMLInputElement>) {
    const val = hourify(e.target.value);
    setHour(val);
    if (val.length === 2) {
      minuteRef.current?.focus();
    }
  }

  function handleHourKey(e: React.KeyboardEvent<HTMLInputElement>) {}

  function handleMinute(e: React.ChangeEvent<HTMLInputElement>) {
    setMinute(minutify(e.target.value));
  }

  function handleMinuteKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && minute.length === 0) {
      hourRef.current?.focus();
      return;
    }
    if (e.key === 'Enter') {
      minuteRef.current?.blur();
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const time = `${hour}:${minute}`;

    handleParentBlur && handleParentBlur(time);
  }

  return (
    <div className={clsx(className, styles.main)}>
      <input
        ref={hourRef}
        onChange={handleHour}
        onKeyDown={handleHourKey}
        onBlur={handleBlur}
        type="text"
        value={hour}
        placeholder={placeholder}
        maxLength={2}
      />
      <div>:</div>
      <input
        ref={minuteRef}
        onChange={handleMinute}
        onKeyDown={handleMinuteKey}
        onBlur={handleBlur}
        type="text"
        value={minute}
        placeholder={placeholder}
        maxLength={2}
      />
    </div>
  );
}

export default TimeField;
