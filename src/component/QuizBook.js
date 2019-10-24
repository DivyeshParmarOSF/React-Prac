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
            totalQuestion : '',
            startQuestion : 1 ,
            btndisable : true
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
            totalQuestion : Object.keys(this.state.quiz).length 
        });
    }
    checkNext = () => {
        this.setState( {
            questionIndex : this.state.questionIndex + 1,
            startQuestion : this.state.startQuestion + 1,
            btndisable : true
        })
    } 
    finishQuiz = () => {
        return false;
    }
    handleShowButton = () => {
        this.setState({
            btndisable : false
        })
    }
    render() {      
        let questions = Object.keys(this.state.quiz).map((key, index) => <QuizQuestion key={index} details={this.state.quiz[key]} showBtn={this.handleShowButton} />)

        return(
            <div className="quiz-wrap">
                <h4>Question {this.state.startQuestion} / {this.state.totalQuestion}</h4>
                <ul className="questions-wrap">
                    {questions[this.state.questionIndex]}
                </ul> 
                {   this.state.questionIndex !== (this.state.totalQuestion - 1) ?
                    <Button disabled={this.state.btndisable ? 'disabled' : ''} className="btn" onClick={this.checkNext} >Next Question</Button> :
                    <Button disabled={this.state.btndisable ? 'disabled' : ''} className="btn" onClick={this.finishQuiz} >Finish Quiz</Button>
                }                
            </div>
        );
    }

}


