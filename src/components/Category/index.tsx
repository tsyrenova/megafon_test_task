import { FC, ReactNode, useState } from "react";
import styles from "./styles.module.scss";
import { BigArrowDownIcon } from "../../Icons/BigArrowDownIcon";
import cx from "classnames";

type Props = {
  categoryName: string;
  children: ReactNode;
};

export const Category: FC<Props> = ({ categoryName, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleIconClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className={styles.category} onClick={handleIconClick}>
        <p className={styles.text}>{categoryName}</p>
        <div className={cx(styles.icon, isCollapsed ? styles.activeIcon : "")}>
          <BigArrowDownIcon />
        </div>
      </div>
      {!isCollapsed && children}
    </div>
  );
};
