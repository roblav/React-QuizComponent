import React, { Component } from 'react';

import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = { incorrectAnswer: false }
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false })
      this.props.showNextQuestionHandler()
    } else {
      this.setState({ incorrectAnswer: true })
    }
  }
  render () {
    return (
      <main>
        <section>
          <div className="QuizQuestion">
            {this.props.quiz_question.instruction_text}
          </div>
        </section>
        <section className="buttons">
          <ul>
            { this.props.quiz_question.answer_options.map( (answer_option, index) => {
                return <QuizQuestionButton key={index} clickHandler={this.handleClick.bind(this)} button_text={answer_option}/>
              })
            }
          </ul>
        </section>
        { this.state.incorrectAnswer ? <p className='error'>Sorry that is not correct</p> : null}
      </main>
    )
  }

}

export default QuizQuestion;

