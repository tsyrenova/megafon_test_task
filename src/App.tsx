import React from "react";
import styles from "./App.module.scss";
import { Category } from "./components/Category";
import { Question } from "./components/Question";
import { observer } from "mobx-react";
import { rootStore } from "./store/rootStore";
import { toJS } from "mobx";

const App = observer(() => {
  const { questionsStore } = rootStore;

  console.log(toJS(questionsStore.sortedCategories));

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>FAQ</h1>
      <div className={styles.categories}>
        {questionsStore.sortedCategories.map((category) => {
          return (
            <Category categoryName={category.name} key={category.id}>
              {category.questions.map((question) => {
                return <Question question={question} key={question.id} categoryId={category.id} />;
              })}
            </Category>
          );
        })}
      </div>
    </div>
  );
});

export { App };
