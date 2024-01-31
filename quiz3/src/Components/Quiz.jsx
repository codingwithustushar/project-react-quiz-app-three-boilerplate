import React from 'react';
import quizQuestions from "../resources/quizQuestion";
import { Link } from 'react-router-dom';

export default class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: quizQuestions,
      currentQuestionIndex: 0
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex - 1
    }));
  };

  handleQuit = () => {
    let shouldQuit = window.confirm('Are you sure you want to quit?');
    if (shouldQuit) {
      window.close();
    }
  };

  render() {
    const { questions, currentQuestionIndex } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className='container'>
        <div className="quiz-box">
          <h1>Question</h1>
          <p className='current-number'>{currentQuestionIndex + 1} of {questions.length}</p>
          <h3 className='question-text'>{currentQuestion.question}</h3>
          <div className="options">
            <button>{currentQuestion.optionA}</button>
            <button>{currentQuestion.optionB}</button>
            <button>{currentQuestion.optionC}</button>
            <button>{currentQuestion.optionD}</button>
          </div>
          <div className="change-page">
            <button className='previous-btn' disabled={currentQuestionIndex === 0} onClick={this.handlePrev}>Previous</button>
            <button className='next-btn' onClick={this.handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
            <button className='quit-btn' onClick={this.handleQuit}>Quit</button>
            
            <Link to="/result"><button className='result'>Result</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
