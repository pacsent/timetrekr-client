import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { formatField, timify } from 'utils/functions';
import styles from './TextField.module.scss';

interface Props {
  defaultValue?: string;
  className?: string;
  placeholder?: string;
  format?: 'time';
  maxLength?: number;
  align?: 'center' | 'right' | 'left';
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

function TextField({
  className,
  defaultValue,
  placeholder,
  format,
  maxLength,
  align,
  onBlur: handleParentBlur,
}: Props) {
  const [value, setValue] = useState(defaultValue);
  const [initialValue, setInitialValue] = useState('');

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (format === 'time') {
      setValue(timify(e.target.value));
    } else {
      setValue(e.target.value);
    }
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    setInitialValue(e.target.value);
  }
  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (initialValue === e.target.value) {
      setInitialValue('');
      return;
    }
    if (format === 'time') {
      setValue(formatField(e.target.value, 'time'));
      e.target.value = formatField(e.target.value, 'time');
    }
    handleParentBlur(e);
  }
  return (
    <div className={clsx(className, styles.main)}>
      <input
        className={clsx(align && styles[align])}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        value={value}
        placeholder={placeholder}
        maxLength={format === 'time' ? 5 : maxLength}
      />
    </div>
  );
}

export default TextField;
