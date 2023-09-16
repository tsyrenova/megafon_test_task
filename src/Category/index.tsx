import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import { BigArrowDownIcon } from "../Icons/BigArrowDownIcon";

type Props = {
  categoryName: string;
  children: ReactNode;
};

export const Category: FC<Props> = ({ categoryName, children }) => {
  return (
    <div>
      <div className={styles.category}>
        <p className={styles.text}>{categoryName}</p>
        <BigArrowDownIcon />
      </div>
      {children}
    </div>
  );
};
