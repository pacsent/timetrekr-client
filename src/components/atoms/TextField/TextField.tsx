import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './TextField.module.scss';

interface Props {
  defaultValue?: string;
  className?: string;
  placeholder?: string;
  type?: 'time';
  format?: 'time';
  maxLength?: number;
}

function TextField({
  className,
  defaultValue,
  placeholder,
  type,
  format,
  maxLength,
}: Props) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <input
      onChange={handleChange}
      type={type || 'text'}
      className={clsx(
        className && className,
        styles.main,
        type && styles[type]
      )}
      value={value}
      placeholder={placeholder}
      maxLength={format === 'time' ? 5 : maxLength}
    />
  );
}

export default TextField;
