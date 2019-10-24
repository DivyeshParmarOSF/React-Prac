import React from 'react'

let currentOptn, correctOptn; 
export default class QuizQuestion extends React.Component {
    constructor() {
        super();
        this.state = {
            correctoptions : '',
            options : [],
            className : ['','','',''],
            ansVerify : false,
            
        }
    }
    componentDidMount() {
        this.setState ({
            correctoptions : this.props.details.correct,
            options : this.props.details.options                 
        });
    }
    checkOption = (e) => {
        if(this.state.ansVerify === false){
           
            this.setState ({
                correctoptions : this.props.details.correct,
                ansVerify : true,
            });
            currentOptn = e.target.innerHTML
            correctOptn = this.state.correctoptions
    
            let updatedClassNames = this.state.className;
            if(currentOptn === correctOptn) {

                updatedClassNames[e.target.getAttribute('data-id')] = 'true';                        
                this.setState({
                    className : updatedClassNames
                });
                this.props.countResult();
            } else {
                updatedClassNames[e.target.getAttribute('data-id')] = 'false';
                this.setState({
                    className : updatedClassNames
                })
            } 
            this.props.showBtn();
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
