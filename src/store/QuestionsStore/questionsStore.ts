import { makeAutoObservable } from "mobx";
import { Category, Question } from "../../types";
import { mockCategories } from "../../mocks/mocks";

export class QuestionsStore {
  categories: Category[] = mockCategories;

  constructor() {
    makeAutoObservable(this);
  }

  findCategoryById = (id: number) => {
    return this.categories.find((category) => category.id === id);
  };

  findQuestionById = (id: number, questions: Question[]) => {
    return questions.find((question) => question.id === id);
  };

  setIsQuestionAnswered = (categoryId: number, questionId: number) => {
    const category = this.findCategoryById(categoryId);
    if (category) {
      const question = this.findQuestionById(questionId, category.questions);
      if (question) {
        question.isQuestionAnswered = true;
      }
    }
  };

  setQuestionRating = (categoryId: number, questionId: number, rating: number) => {
    const category = this.findCategoryById(categoryId);
    if (category) {
      const question = this.findQuestionById(questionId, category.questions);
      if (question) {
        question.rating = rating;
      }
    }
  };

  getQuestionRating = (categoryId: number, questionId: number) => {
    const category = this.findCategoryById(categoryId);
    if (!category) {
      throw new Error("Категория не найдена");
    }
    if (category) {
      const question = this.findQuestionById(questionId, category.questions);
      if (!question) {
        throw new Error("Вопрос не найден");
      }
      return question.rating;
    }
  };

  recalculateCategoryRating = (categoryId: number) => {
    const category = this.findCategoryById(categoryId);
    if (!category) {
      throw new Error("Категория не найдена");
    }

    const updatedCategoryRating = category.questions.reduce((acc, question) => {
      return acc + question.rating;
    }, 0);

    category.rating = updatedCategoryRating;
  };

  get sortedCategories() {
    return this.categories.slice().sort((a, b) => b.rating - a.rating);
  }
}
