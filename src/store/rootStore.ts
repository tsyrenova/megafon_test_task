import { QuestionsStore } from "./QuestionsStore/questionsStore";

export class RootStore {
  questionsStore;

  constructor() {
    this.questionsStore = new QuestionsStore();
  }
}

export const rootStore = new RootStore();
