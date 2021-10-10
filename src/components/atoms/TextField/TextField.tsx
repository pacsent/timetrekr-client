import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { formatField } from 'utils/functions';
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

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    setValue(formatField(e.target.value, 'time'));
    e.target.value = formatField(e.target.value, 'time');
    handleParentBlur(e);
  }
  console.log('styles.align:  ', styles.align);
  return (
    <div className={clsx(className, styles.main)}>
      <input
        className={clsx(align && styles[align])}
        onChange={handleChange}
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
