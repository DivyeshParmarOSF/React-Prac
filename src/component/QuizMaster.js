import React from "react";
import { Button, Modal } from 'react-bootstrap';
import QuizBook from '../component/QuizBook'
import './quizmaster.css' 


let quizbook
export default class QuizModal extends React.Component {
    
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.loadQuizOnStart = React.createRef();
    
        this.state = {
          show: true
        };
      }
    
      handleClose() {
        this.setState({ show: false });
        this.loadQuizOnStart.current.loadQuiz();
      }
    
      handleShow() {
        this.setState({ show: true });
      }
     


  render() {      
    return(
        <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton className="text-center">
                <Modal.Title >Welcome to Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                This is a Quiz Application built with ReactJS.
                </p> 
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.handleClose}>Start Quiz</Button>
            </Modal.Footer>
        </Modal>

        <QuizBook ref={this.loadQuizOnStart}/> 
      </div>
    );
  }

}


