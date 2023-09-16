import React from "react";
import styles from "./App.module.scss";
import { Category } from "./Category";
import { data } from "./utils";
import { Question } from "./Question";

function App() {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>FAQ</h1>
      <div className={styles.categories}>
        {data.map((category) => {
          return <Category categoryName={category.name} key={category.id}>
            {category.questions.map((question) => {
              return <Question name={question.title} text={question.text} key={question.id}/>
            })}
          </Category>;
        })}
      </div>
    </div>
  );
}

export default App;
