"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questions_test_json_1 = __importDefault(require("./data/questions.test.json"));
const questions = questions_test_json_1.default;
console.log(questions);
class Quiz {
    questions;
    constructor(questions) {
        this.questions = questions;
    }
}
const quiz = new Quiz(questions);
console.log(quiz);
