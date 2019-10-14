import React from 'react'
import { Button } from "react-bootstrap"
import { throwStatement } from '@babel/types';
import quizList from './quizlist';

let currentOptn, correctOptn; 
export default class QuizQuestion extends React.Component {
    constructor() {
        super();
        this.state = {
            correctoptions : '',
            optionClass : false,    
            totalQuestion : 0,
            number : 1
        }
    }
    componentDidMount(){
        this.setState ({
            correctoptions : this.props.details.correct,
            totalQuestion : Object.keys(quizList).length,     
        });
    }
    checkOption = (e) => {
        this.setState ({
            correctoptions : this.props.details.correct,      
        });

        currentOptn = e.target.innerHTML
        correctOptn = this.state.correctoptions

        
        if(currentOptn === correctOptn) {
            this.setState({
                optionClass : true,
                number : this.state.number + 1
            })
        } else {
            this.setState({
                optionClass : false
            })
        }        
    }
  render() {
    return(
      <li>
        <h4>Question {this.state.number} / {this.state.totalQuestion}</h4>
        <div className='question-title'>
            {this.props.details.question}
        </div>
        <ul className="options-list">
            <li  onClick={this.checkOption} data-id="1" className={this.state.optionClass ?  'optcorrect' : 'optwrong' }>{this.props.details.options1}</li>
            <li  onClick={this.checkOption} data-id="2" className={this.state.optionClass ?  'optcorrect' : 'optwrong' }>{this.props.details.options2}</li>
            <li  onClick={this.checkOption} data-id="3" className={this.state.optionClass ?  'optcorrect' : 'optwrong' }>{this.props.details.options3}</li>
            <li  onClick={this.checkOption} data-id="4" className={this.state.optionClass ?  'optcorrect' : 'optwrong' }>{this.props.details.options4}</li>
        </ul>
        
      </li>
    );
  }
}
