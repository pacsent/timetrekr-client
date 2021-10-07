import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
  className?: string;
  children?: ReactNode;
  size?: '200' | '300' | '400' | '500' | '600' | '700';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ className, children, size, onClick: buttonClicked }: Props) {
  return (
    <button
      onClick={buttonClicked}
      className={clsx(
        className && className,
        styles.Button,
        size && styles[`Button__${size}`]
      )}
    >
      {children}
    </button>
  );
}

export default Button;
