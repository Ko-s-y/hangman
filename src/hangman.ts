import readLinePromises from "readline/promises"
import rawData from "./data/questions.test.json"
import chalk from "chalk";

interface Question {
  word: string;
  hint: string;
}
type Color = "red" | "green" | "yellow" | "white"
interface UserInterFace {
  clear(): void;
  destroy(): void;
  output(message: string, color?: Color):void
  outputAnswer(message: string): void
}

const rl = readLinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const CLI: UserInterFace = {
  async input() {
    const input = await rl.question("文字または単語を推測してください:");
    return input.replaceAll(" ", "").toLowerCase();
  },
  clear() {
    console.clear(); // コンソール画面のクリア
  },
  destroy() {
    rl.close(); // readlineインターフェイスの終了
  },
}

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

  // 次の質問が存在するか確認
  hasNext(): boolean {
    return this.questions.length > 0;
  }

  // 残りの質問数を取得
  lefts(): number {
    return this.questions.length;
  }
}

const questions: Question[] = rawData;
const quiz = new Quiz(questions);
