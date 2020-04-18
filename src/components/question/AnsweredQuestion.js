import React, {Component} from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";
import {OPTION_ONE, OPTION_TWO} from "../../actions/question";
import {MdDone} from 'react-icons/md';

class AnsweredQuestion extends Component {
    render() {
        const {question, answeredOption, author} = this.props;
        const optionOneCnt = question.optionOne.votes.length, optionTwoCnt = question.optionTwo.votes.length;
        const total = optionOneCnt + optionTwoCnt;
        const optionOnePercentage = ((optionOneCnt * 100) / (total)).toPrecision(3);
        return (
            <div className="container">
                <div className="question">
                    <div>
                        <div className='question-info'>
                            <div>
                                <MdDone className="unansweredOption"/>
                                <h1>Asked By {author.name}</h1>
                                <div className="separator"/>
                                <div>
                                    {answeredOption === OPTION_ONE ? (<MdDone className="answeredOption"/>) : (
                                        <MdDone className="unansweredOption"/>)}
                                    <p className="optionOne">Would you rather {question.optionOne.text}?</p>
                                </div>
                                <div className="separator"/>
                                <div>
                                    {answeredOption === OPTION_TWO ? (<MdDone className="answeredOption"/>) : (
                                        <MdDone className="unansweredOption"/>)}
                                    <p className="optionTwo">Would you rather {question.optionTwo.text}?</p>
                                    <div className="separator"/>
                                </div>

                                <h4>Results</h4>
                                <ProgressBar>
                                    {optionOneCnt > 0 && (<ProgressBar animated variant="info" now={optionOnePercentage}
                                                                       label={`${optionOnePercentage}%`} key={1}/>)}
                                    {optionTwoCnt > 0 && (
                                        <ProgressBar animated variant="success" now={`${100 - optionOnePercentage}`}
                                                     label={`${100 - optionOnePercentage}%`} key={2}/>)}
                                </ProgressBar>
                                <h4 className="question-info">Total Number of Votes is {total}.</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnsweredQuestion;