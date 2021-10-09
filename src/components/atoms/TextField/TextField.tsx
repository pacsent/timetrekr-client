import clsx from 'clsx';
import { useEffect } from 'react';
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
  function reformat(e: any) {
    console.log('e.target.value ', e.target.value);
    return;
  }

  useEffect(() => {
    console.log({ defaultValue });
  }, [defaultValue]);

  return (
    <input
      onChange={reformat}
      type={type || 'text'}
      className={clsx(
        className && className,
        styles.main,
        type && styles[type]
      )}
      value={defaultValue}
      placeholder={placeholder}
      maxLength={format === 'time' ? 5 : maxLength}
    />
  );
}

export default TextField;
