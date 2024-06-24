"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questions_test_json_1 = __importDefault(require("./data/questions.test.json"));
const questions = questions_test_json_1.default;
class Quiz {
    questions;
    constructor(questions) {
        this.questions = questions;
    }
    // ランダムに質問を取得して、その質問をリストから削除
    getNext() {
        const idx = Math.floor(Math.random() * this.questions.length);
        const [question] = this.questions.splice(idx, 1);
        return question;
    }
}
