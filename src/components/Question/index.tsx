import { SmallArrowDownIcon } from "../../Icons/SmallArrowDownIcon";
import styles from "./styles.module.scss";
import { FC, Fragment, useState } from "react";
import cx from "classnames";
import { Question as QuestionType } from "../../types";
import { observer } from "mobx-react";
import { rootStore } from "../../store/rootStore";

type Props = {
  question: QuestionType;
  categoryId: number;
};

export const Question: FC<Props> = observer(({ question, categoryId }) => {
  const { questionsStore } = rootStore;
  const { title, text, isQuestionAnswered, id } = question;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleIconClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleYesButtonClick = (categoryId: number, questionId: number) => {
    const questionRating = questionsStore.getQuestionRating(categoryId, questionId) || 0;
    questionsStore.setQuestionRating(categoryId, questionId, questionRating + 1);
    questionsStore.recalculateCategoryRating(categoryId);
    questionsStore.setIsQuestionAnswered(categoryId, questionId);
  };

  const handleNoButtonClick = (categoryId: number, questionId: number) => {
    const questionRating = questionsStore.getQuestionRating(categoryId, questionId) || 0;
    questionsStore.setQuestionRating(categoryId, questionId, questionRating - 1);
    questionsStore.recalculateCategoryRating(categoryId);
    questionsStore.setIsQuestionAnswered(categoryId, questionId);
  };

  return (
    <div className={styles.questionWrapper}>
      <div className={styles.wrapper} onClick={handleIconClick}>
        <p className={styles.title}>Вопрос</p>
        <div className={styles.question}>
          <p>{title}</p>
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
            {!isQuestionAnswered ? (
              <>
                <p className={styles.extraText}>Информация была полезной?</p>
                <div className={styles.buttonWrapper}>
                  <button className={styles.button} onClick={() => handleYesButtonClick(categoryId, id)}>
                    Да
                  </button>
                  <button className={styles.button} onClick={() => handleNoButtonClick(categoryId, id)}>
                    Нет
                  </button>
                </div>
              </>
            ) : (
              <p className={styles.extraText}>Отзыв отправлен, спасибо!</p>
            )}
          </div>
        </>
      )}
    </div>
  );
});
