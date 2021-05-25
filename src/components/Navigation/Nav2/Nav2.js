import React from 'react';
import { connect } from 'react-redux';

import './Nav2.scss';

const Nav2 = props => {

    // console.log([...props.currentQuestions])

    const questions = [...props.currentQuestions];

    questions.push('extra');

    // console.log(questions);

    return (
        <div className='Nav2__wrapper'>
            <div className="Nav2__items">
                {questions.map((question, i) =>{
                    let retThis;
                    
                    if(i === 0){
                        retThis  = (<div className="Nav2__item Nav2__item-init Nav2__item-activate" key={`Nav2__item${i}`}>
                            <div className="Nav2__item--line"></div>
                            <div className="Nav2__item--text">{`0${i+1}`}</div>
                        </div>)
                    }                                        
                    else{
                        retThis  = (<div className="Nav2__item" key={`Nav2__item${i}`}>
                            <div className="Nav2__item--line Nav2__item--line"></div>
                            <div className="Nav2__item--text">{ i !== (questions.length-1) ? `0${i+1}` : ''}</div>
                        </div>)
                    }                    

                    return retThis;
                })}                    
            </div>
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        currentQuestions: state.questionsReducer.currentQuestions,
    }
}

export default connect(mapStateToProps, null)(Nav2);