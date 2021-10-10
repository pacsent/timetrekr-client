import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
  className?: string;
  children?: ReactNode;
  size?: '200' | '300' | '400' | '500' | '600' | '700';
  variant?: 'primary' | 'secondary' | 'red';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({
  className,
  children,
  size,
  variant,
  onClick: buttonClicked,
}: Props) {
  return (
    <button
      onClick={buttonClicked}
      className={clsx(
        className,
        styles.main,
        size && styles[`size__${size}`],
        variant && styles[variant]
      )}
    >
      {children}
    </button>
  );
}

export default Button;
