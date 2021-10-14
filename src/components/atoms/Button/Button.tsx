import { MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'red';

interface Props {
  className?: string;
  children?: ReactNode;
  size?: '200' | '300' | '400' | '500' | '600' | '700';
  variant?: ButtonVariant;
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
        variant && styles[variant],
      )}
    >
      {children}
    </button>
  );
}

export default Button;
