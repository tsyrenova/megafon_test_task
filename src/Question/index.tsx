import { SmallArrowDownIcon } from "../Icons/SmallArrowDownIcon";
import styles from "./styles.module.scss";
import { FC, Fragment, useState } from "react";
import cx from "classnames";

type Props = {
  name: string;
  text: string;
};

export const Question: FC<Props> = ({ name, text }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleIconClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.questionWrapper} onClick={handleIconClick}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Вопрос</p>
        <div className={styles.question}>
          <p>{name}</p>
          <div className={cx(styles.icon, isCollapsed ? styles.activeIcon : "")}>
            <SmallArrowDownIcon />
          </div>
        </div>
      </div>
      {!isCollapsed && (
        <>
          <div className={styles.wrapper}>
            <p className={styles.title}>Ответ</p>
            <p className={styles.answer}>{text}</p>
          </div>
          <div className={styles.buttonContainer}>
            <p className={styles.extraText}>Информация была полезной?</p>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>Да</button>
              <button className={styles.button}>Нет</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
