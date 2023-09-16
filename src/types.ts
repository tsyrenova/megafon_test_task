type Question = {
  id: number;
  title: string;
  text: string;
};

export type Category = {
  id: number;
  name: string;
  questions: Question[];
};
