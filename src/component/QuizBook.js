import React from "react";
import quizList from './quizlist';
import quiz from './quizlist';
import QuizQuestion from "./QuizQuestion";
import './quizmaster.css' ;
 

export default class QuizBook extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            quiz : {}
            //quiz : [{'name': 'divyesh'}]
        };
    }
    loadQuiz = () =>{
        this.setState({quiz : quizList });
    }

    render() {      
        // const data = this.state.quiz;
        // const listitem = data.map((item) => <p>{item.name}</p>)
        return(
            <div className="quiz-wrap">
                <ul className="questions-wrap">
                    {/* {listitem} */}
                    {Object.keys(this.state.quiz).map( (key, index) => <QuizQuestion key={index} details={this.state.quiz[key]} />)} 
                </ul>

            </div>
        );
    }

}


