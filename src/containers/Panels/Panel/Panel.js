import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import Nav1 from '../../../components/Navigation/Nav1/Nav1';
import Question from '../../../components/Question/Question';
import Answers from '../../../components/MultipleChoice/Answers';
import Footer from '../../../components/Footer/Footer';

import  LandingSet from '../../../libs/LandingSet';
import './Panel.scss'

const Panel = props => {

    const classes = [
        'Panel', 
        props.pnlIdx !== undefined ? `Panel--${props.pnlIdx}` : '',
        props.classAdd ? `Panel${props.classAdd}` : '',        
    ];

    const nextTxt = props.pnlIdx+1 === props.pnlsLen ? LandingSet.finishBtn[props.currentLang] : LandingSet.nextBtn[props.currentLang];
    
    return (
        <div className={classes.join(' ')}>
            {
                props.children ? (
                    <div className={`Panel__overlay ${props.classAdd === '__results' ? 'Panel__overlay--x' : 'Panel__overlay--1'}`}>
                        <div className="Panel__wrapper Panel__wrapper--2">
                            {props.children}
                        </div>
                    </div>
                ) : 
                    
                
                (
                    <div className="Panel__overlay Panel__overlay--2">
                        <Nav1
                            clicked={props.pnlMvmtHnldr}
                            retLnd={!props.pnlIdx}
                            nextBtnIdx={props.pnlIdx !== undefined ? props.pnlIdx : null}/>
                        <div className='Panel__wrapper Panel__wrapper--1'>                        
                            <div className="Panel__header">
                                {props.pnl.currH}
                            </div>
                            <Question
                                question={props.pnl.currQ}
                            />
                            <Answers
                                type={props.pnl.type}
                                answers={props.pnl.currA}
                                pnlIdx={props.pnlIdx}
                                dirDown={true}
                            />                                                    
                        </div>
                        <Nav1
                            text={nextTxt}
                            pnlID={props.pnlIdx+1}
                            type={1}
                            nextBtnIdx={props.pnlIdx !== undefined ? props.pnlIdx : null}
                            clicked={props.pnlMvmtHnldr}
                        />                        
                    </div>
                )           
            }            

        </div>
    )
}

const mapStateToProps = state => { 
    return {
        currentLang: state.langReducer.currentLang,
    }
}

export default connect(mapStateToProps, null)(Panel);
