import clsx from "clsx";
import styles from "./Input.module.scss";

interface Props {
  defaultValue?: string;
  className?: string;
}

function TextField({ defaultValue, className }: Props) {
  return (
    <input
      className={clsx(className && className, styles.Input)}
      defaultValue={defaultValue}
    />
  );
}

export default TextField;
