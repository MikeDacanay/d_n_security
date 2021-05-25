import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';

import Bullet from './Bullet/Bullet';
import Buttons from './Buttons/Buttons';
import SpiderClass from '../Spider/SpiderClass';
import ResultSet from '../../libs/ResultSet';

import './Results.scss';

const Results = props => {
    const CURR_QUESTIONS = props.currentQuestions;
    const specificScore = props.specificScore;    
    const currLang = props.currentLang;

    const [rslTitle, setrslTitle] = useState(0);

    const resultTitle = (scoress) => {        
        const numOfPerfScore = scoress.reduce((a, v) => (Number(v) === 100 ? a + 1 : a), 0);
        // console.log(numOfPerfScore);
        if(numOfPerfScore >= 4){
            return ResultSet.titleG[currLang];
        }else if(numOfPerfScore === 3){
            return ResultSet.titleM[currLang];
        }else{
            return ResultSet.titleB[currLang];
        }
    }

    useEffect(()=>{
        
        // const test = ;

        setrslTitle(resultTitle(props.specificScore));
    },[props.specificScore])

    // console.log(rslTitle);

    const bullets = specificScore.map((score, i) => {       

        // console.log(CURR_QUESTIONS[i]);

        return (
            <Bullet
                title={CURR_QUESTIONS[i].currH}         
                mainN={CURR_QUESTIONS[i].currNegCopy}
                subNLink = {CURR_QUESTIONS[i].currNegLink}
                subNLinkText = {CURR_QUESTIONS[i].currNegLinkText}
                key={`bullet${i}`}
                score={score}
            />
        )
    })


    return (
        <React.Fragment>
            <div className="Results__spider--wrapper">
                <div className="Results__subtitle Results__subtitle--1">{ResultSet.report[props.currentLang]}: {props.currentTxtRole}</div>
                <div className="Results__title Results__title--1">{rslTitle}</div>
                <SpiderClass
                    isMob={true}
                />
                <Buttons
                />
            </div>
            <div className="Results__subtitle Results__subtitle--2">{ResultSet.report[props.currentLang]}: {props.currentTxtRole}</div>
            <div className="Results__title Results__title--2">{rslTitle}</div>
            <div className="Results__points">
                {bullets}
                <Buttons
                />
            </div>
            
        </React.Fragment>
    )
}

const mapStateToProps = state => { 
    return {
        currentQuestions: state.questionsReducer.currentQuestions,
        specificScore: state.scoreReducer.specificScore,

        currentLang: state.langReducer.currentLang,
        currentRole: state.roleReducer.currentRole,
        currentTxtRole: state.roleReducer.currentTxtRole,
    }
}

export default connect(mapStateToProps, null)(Results);