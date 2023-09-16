
import { SmallArrowDownIcon } from "../Icons/SmallArrowDownIcon";
import styles from "./styles.module.scss";
import { FC } from "react";

type Props = {
  name: string;
  text: string;
};

export const Question: FC<Props> = ({ name, text }) => {
  return (
    <div className={styles.questionWrapper}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Вопрос</p>
        <div className={styles.question}>
          <p>{name}</p>
          <SmallArrowDownIcon/>
        </div>
      </div>
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
    </div>
  );
};
