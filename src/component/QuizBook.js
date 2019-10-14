import React from "react";
import quizList from './quizlist';
import QuizQuestion from "./QuizQuestion";
import './quizmaster.css' ;
import { Button } from "react-bootstrap"
 

export default class QuizBook extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            quiz : {},
            questionIndex : 0,
            totalQuestion : ''
        };
    }
    loadQuiz = () =>{
        this.setState({
            quiz : quizList,
            totalQuestion : Object.keys(this.state.quiz).length 
        });     
    }
    componentDidMount = () => {
        this.setState({
            quiz : quizList,
            //questionIndex : this.state.questionIndex + 1,

            //totalQuestion : Object.keys(this.state.quiz).length 
        }); 
    }
    checkNext = () => {
        this.setState( {
            questionIndex : this.state.questionIndex + 1
        })
        //alert(this.state.questionIndex);
         
    } 
    render() {      
        let questions = Object.keys(this.state.quiz).map((key, index) => <QuizQuestion key={index} details={this.state.quiz[key]} />)

        return(
            <div className="quiz-wrap">
                <ul className="questions-wrap">
                    {questions[this.state.questionIndex]}
                </ul>
                { this.state.questionIndex } 
                -->
                { this.state.totalQuestion }
                 
                <Button className="btn" onClick={this.checkNext} > {this.state.questionIndex === this.state.totalQuestion ? 'Finish Quiz' : 'Next Question ' } </Button>
            </div>
        );
    }

}


