import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import ResultSet from '../../libs/ResultSet';

import Modal from '../../hoc/Modal/Modal';

import './Gate.scss';

const Gate = props => {

    let pass2 = useRef(true);

    useEffect(() => {
        const search = window.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const score = params.get('score'); // bar

        if(score !== null){           
            pass2.current = false;
        }
    },[pass2]);

    const [answer1, setAnswer1] = useState(false);

    let show = props.currentQuestion === 4 && !answer1 ? true : false;

    let pass = props.currentScores[2] > 0 && true;

    const iframeClickHandlr = (num) => {           
        setAnswer1(true);
    };

    let retThis = pass && pass2.current ? (
        <Modal
            showOut={show}>
            <div className="Gate__container">
                <div className="Gate" onClick={iframeClickHandlr}></div>
                <iframe className='Gate__Iframe' title="Finance tool gate" frameborder="0" allowfullscreen="true" allow="fullscreen" src={`https://www.oracle.com/${ResultSet.cc[props.currentLang]}/asset/modern-finance-assessment/form.html`}></iframe>             
            </div>                                                        
        </Modal>
    ): null;

    return retThis;
};

const mapStateToProps = state => { 
    return {
        currentQuestion: state.questionsReducer.currentQuestion,
        currentLang: state.langReducer.currentLang,
        currentScores: state.scoreReducer.specificScore,
    }
}

export default connect(mapStateToProps, null)(Gate);