export type Question = {
  id: number;
  title: string;
  text: string;
  isQuestionAnswered: boolean;
  rating: number
};

export type Category = {
  id: number;
  name: string;
  questions: Question[];
  rating: number
};
