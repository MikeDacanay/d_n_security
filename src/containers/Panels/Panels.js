import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { gsap } from "gsap";
import $ from 'jquery';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import RoleOptions from '../../components/RoleOptions/RoleOptions';
import Nav1 from '../../components/Navigation/Nav1/Nav1';
import Results from '../../components/Results/Results';
import HEADER_MOD from '../../libs/Models/Modellibs/HeaderMod';

import LandingSet from '../../libs/LandingSet';

import Panel from './Panel/Panel';

import * as actionCreators from '../../store/actions/index';

import './Panels.scss';
// import { act } from 'react-dom/test-utils';

const Panels = props => {
    const [panlPosition, setPanlPosition] = useState(0);

    const changeRoleHandlr = (role, lang) => {
        props.onChangeRole(role, lang);        
        props.onChooseQuestions(role, lang);
        // props.onInitQuestions(Array(props.currentQuestions.length).fill(0));
    };

    useEffect(() => {
        const search = window.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const role = String(params.get('role')).replace(/@/g, '&'); // bar
        const score = params.get('score'); // bar
        const lang = params.get('lang');
        
        if(lang !== null){
            props.onChangeLang(lang);

            $(`.${lang}`).prop('selected', 'selected');

            // console.log($(`.${lang}`));
            $('.ochat_slideout').addClass(props.currentLang);
            $('.ochat_modal').addClass(props.currentLang);
        }

        if(role !== null && score !== null){           
            gsap.to('html', {opacity: 1, delay: 1});

            gsap.to('.Panels',{ 
                y: '-700vh'
            })
            gsap.to('.Spider__Container', {
                y: 0,
            })

            if(Number($('body').width()) < 1025){
                const rule = CSSRulePlugin.getRule(".Header:after"); 

                gsap.to(rule, {
                    backgroundColor: '#233b3f',
                })
            }

            gsap.to('.Background__wrapper--1',{ 
                y: '-100%'
            })
            gsap.to('.Background__wrapper--2', {
                y: '-100%',
            })            
            
            const initScore = score.split('_');

            props.onChangeRole(role, lang);        
            props.onChangeLang(lang);
            props.onChooseQuestions(role, lang);
            props.onUpdatePeerScores(role);
            props.onInitQuestions(initScore);
            props.onNavQuestion(null);

            const perfSet = [];

            initScore.forEach((score, i) => {                
                if(score === '100'){    
                    perfSet.push(i)
                }
            });

            const bulletNodes = $('.Bullet');
            const spiderNodes1 = $('.Spider__node--1');
            const spiderNodes2 = $('.Spider__node--2');

            $('.Header').addClass('Header--1');

            if(perfSet.length > 0){
                perfSet.forEach(perfScoreIdx => {
                    $(bulletNodes[perfScoreIdx]).removeClass('Bullet--2');
                    $(bulletNodes[perfScoreIdx]).addClass('Bullet--1');

                    $(spiderNodes1[perfScoreIdx]).hide();
                    $(spiderNodes2[perfScoreIdx]).hide();
                });
            }

            // for(let i = 0; i < 7; i++){
            //     props.onNavQuestion(1);
            // }
        }else{
            $('html').addClass('show');
            props.onInitQuestions(Array(props.currentQuestions.length).fill(0)); 
        }
    },[]);

    const panelMovementHandlr = (direction) => {
        const num = direction ? panlPosition-100 : panlPosition+100; 
        const panlNum = direction ? 1 : -1;
        setPanlPosition(num);
        props.onNavQuestion(panlNum);

        gsap.to('.Panel', {
            y: `${num}vh`,
            duration: 1
        });
    };

    const panels = props.currentQuestions.map(question => {       
        question.currQ = question.questionSet[props.currentLang];
        question.currA = question.answerSet[props.currentLang];
        question.currH = HEADER_MOD[`${question.currQ}`].header;
        return question;
    });


    return (        
        <div className='Panels'>
            <Panel
                classAdd='__landing'
            >
                <h1 className={`Landing__title ${props.currentLang}`}>
                    <span>{LandingSet.title1[props.currentLang]}</span> 
                    <span>{LandingSet.title2[props.currentLang]}</span>
                </h1>
                <hr className='Landing__hr'/>
                <div className="Landing__text">
                    {LandingSet.landingCopy[props.currentLang]}
                </div>    
                <RoleOptions
                    changed={changeRoleHandlr}
                    roles={props.EXISTING_ROLES}
                />
                <Nav1
                    text={LandingSet.getStarted[props.currentLang]}
                    type={0}
                    clicked = {panelMovementHandlr}
                />
            </Panel>         
            {panels.map((panel,i) => (
                <Panel
                    classAdd='__question'
                    pnlMvmtHnldr = {panelMovementHandlr}
                    pnl={panel}
                    pnlsLen={panels.length}
                    key={`panel-${i}`}
                    pnlIdx={i}
                />
            ))}
            <Panel                
                classAdd='__results'
            >               
                <Results/>
            </Panel>
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        currentRole: state.roleReducer.currentRole,
        EXISTING_ROLES: state.roleReducer.EXISTING_ROLES,

        currentLang: state.langReducer.currentLang,
        EXISTING_LANGS: state.langReducer.EXISTING_LANGS,

        currentQuestions: state.questionsReducer.currentQuestions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeRole: (role, lang) => dispatch(actionCreators.choose_role(role, lang)),
        onChangeLang: (lang) => dispatch(actionCreators.choose_lang(lang)),
        onChooseQuestions: (role, lang) => dispatch(actionCreators.choose_questions(role, lang)),
        onNavQuestion: (dir) => dispatch(actionCreators.nav_question(dir)),
        onInitQuestions: (arr) => dispatch(actionCreators.init_scores(arr)),        
        onUpdatePeerScores: (r) => dispatch(actionCreators.update_peerscore(r)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Panels);