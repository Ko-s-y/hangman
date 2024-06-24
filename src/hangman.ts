import rawData from "./data/questions.test.json"

interface Question {
  word: string;
  hint: string;
}

const questions: Question[] = rawData;

class Quiz {
  questions: Question[];
  constructor(questions: Question[]) {
    this.questions = questions;
  }

  // ランダムに質問を取得して、その質問をリストから削除
  getNext(): Question {
    const idx = Math.floor(Math.random() * this.questions.length);
    const [question] = this.questions.splice(idx, 1);
    return question;
  }
}
