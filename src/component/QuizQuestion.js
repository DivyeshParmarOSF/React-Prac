import React from 'react'
import { Button } from "react-bootstrap"
import { throwStatement } from '@babel/types';
import quizList from './quizlist';

let currentOptn, correctOptn, updatedResult; 
export default class QuizQuestion extends React.Component {
    constructor() {
        super();
        this.state = {
            correctoptions : '',
            //optionClass : false,    
            //number : 1,
            options : [],
            className : ['','','',''],
            ansVerify : false,
            resultAns : 0,
        }
    }
    componentDidMount(){
        this.setState ({
            correctoptions : this.props.details.correct,
            options : this.props.details.options                 
        });
    }
    checkOption = (e) => {
        this.setState({
            resultAns : this.state.resultAns + 1
        })
        console.log(" top value " + (this.state.resultAns) );
        if(this.state.ansVerify === false){
            this.setState ({
                correctoptions : this.props.details.correct,
                //btndisable : this.props.btndisable,
                ansVerify : true,
                //resultAns : this.state.resultAns + 1
            });
            currentOptn = e.target.innerHTML
            correctOptn = this.state.correctoptions
    
            let updatedClassNames = this.state.className;
            
            if(currentOptn === correctOptn) {
                updatedClassNames[e.target.getAttribute('data-id')] = 'true';
                        
                this.setState({
                    //optionClass : !this.state.optionClass,
                    //number : this.state.number + 1,
                    className : updatedClassNames,
                   
                })
            } else {
                updatedClassNames[e.target.getAttribute('data-id')] = 'false';
                this.setState({
                    //optionClass : false,
                    className : updatedClassNames
                })
            } 
            this.props.showBtn(); 
             
        } else {
            return false;
        } 
    }
    
    render() {
        let  options = this.state.options;
        const listItems = options.map((key, i) => <li key={key} data-id={i} onClick={this.checkOption} className={this.state.className[i]}>{key}</li>);  

        return(
        <li>
            <div className='question-title'>
                {this.props.details.question}
            </div>
            <ul className="options-list">
                {listItems}
            </ul>
        </li>
        );
    }
}
