import React from 'react'
import { Button } from "react-bootstrap"
import { throwStatement } from '@babel/types';

let currentOptn, correctOptn; 
export default class QuizQuestion extends React.Component {
    constructor() {
        super();
        this.state = {
            correctoptions : '',
            optionClass : false,
            items : []
        }
        //this.checkOption = this.checkOption.bind(this);
    }
    componentDidMount(){
        this.setState ({
            correctoptions : this.props.details.correct,
            items : this.props.details
        });
        
    }
    checkOption = (e) => {
        currentOptn = e.target.innerHTML
        correctOptn = this.state.correctoptions
        
        if(currentOptn === correctOptn) {
            this.setState({
                optionClass : true
            })
        } else {
            this.setState({
                optionClass : false
            })
        }        
    }
  render() {
      let items = this.state.items;
    return(
      <li>
        <div className='question-title'>
            {this.props.details.question}
        </div>
        <ul className="options-list">
            
           
            {/* {items.map( item => 
             <li key={item.id}>{item.options1}</li>
           )} */}

            <li  onClick={this.checkOption} data-id="1" className={this.state.optionClass ?  'optcorrect' : 'optwrong' }>{this.props.details.options1}</li>
            <li  onClick={this.checkOption} data-id="2" className={this.state.optionClass ?  'optcorrect' : 'optwrong' }>{this.props.details.options2}</li>
            <li  onClick={this.checkOption} data-id="3" className={this.state.optionClass ?  'optcorrect' : 'optwrong' }>{this.props.details.options3}</li>
            <li  onClick={this.checkOption} data-id="4" className={this.state.optionClass ?  'optcorrect' : 'optwrong' }>{this.props.details.options4}</li>
        </ul>
        <Button className="btn">Next Question</Button>
      </li>
    );
  }
}