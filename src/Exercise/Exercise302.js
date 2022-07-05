import React, { Component } from "react";
import "../App.css";

class Exercise302 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      questions: [
        {
          question: "What animal barks?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null,
        },
        {
          question: "What animal is more closely related to a tiger?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null,
        },
        {
          question: "What animal is more closely related to a wolf?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null,
        },
        {
          question: "What animal is best known for playing fetch?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null,
        },
      ],
    };
  }
  displayQuestion(index) {
    if (this.state.playerScore < index) {
      return;
    }
    const question = this.state.questions[index];
    return (
      <div className="question-display">
        <p className="question">{question.question}</p>
        <br />
        <button
          className="question-choice"
          onClick={() =>
            this.answerQuestion(index, question.possibleAnswers[0])
          }
        >
          {question.possibleAnswers[0]}
        </button>
        <button
          className="question-choice"
          onClick={() =>
            this.answerQuestion(index, question.possibleAnswers[1])
          }
        >
          {question.possibleAnswers[1]}
        </button>
        <br />
        {/* <p className="result-correct">Your answer is correct!</p>
        <p className="result-incorrect">Your answer is incorrect!</p> */}
        {this.displayResult(index)}
      </div>
    );
  }
  answerQuestion(index, choice) {
    const answeredQuestion = this.state.questions[index];
    answeredQuestion.playerChoice = choice;
    const allQuestions = this.state.questions;
    allQuestions[index] = answeredQuestion;
    this.setState(
      {
        question: allQuestions,
      },
      () => {
        this.updatePlayerScore();
      }
    );
  }
  updatePlayerScore() {
    const playerScore = this.state.questions.filter(
      (q) => q.rightAnswer === q.playerChoice
    ).length;
    this.setState({ playerScore });
    console.log("New player score:", playerScore);
  }
  displayResult(index) {
    const question = this.state.questions[index];
    if (!question.playerChoice) {
      return;
    }
    if (question.playerChoice === question.rightAnswer) {
      return <p className="result-correct">Your answer is correct!</p>;
    } else {
      return <p className="result-incorrect">Your answer is incorrect!</p>;
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Quiz Show!</h1>
        <hr />
        {this.displayQuestion(0)}
        {this.displayQuestion(1)}
        {this.displayQuestion(2)}
        {this.displayQuestion(3)}
      </div>
    );
  }
}

export default Exercise302;
