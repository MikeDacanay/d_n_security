import React, {useState} from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

import * as animations from './shared/animations';

import './Nav1.scss';

const Nav1 = props => {
    const [bgPosition, setBgPosition] = useState(0);

    const classArrow = [
        'Nav1__arrow', 
        props.text ? "Nav1__arrow--down" : 'Nav1__arrow--up',  
    ];

    const classNav1 = [
        'Nav1',
        props.type === 0 ?  "Nav1--1" : "",
        !props.text ?  "Nav1--2" : "",
        props.type === 1 ?  "Nav1--3" : "",
    ]

    const animHandlr = () => {              
        if(props.type === 0){            
            const num = -100; 
            setBgPosition(num);

            const anim = gsap.timeline();

            anim.to(".Background__wrapper", {
                y: `${num}%`, 
                duration: 1
            })

            gsap.to(".Nav2__wrapper", {
                y: `0`, 
                duration: 1 
            });      
            gsap.to('.Spider__Container', {
                y: '0',
                duration: 1,
            });

            gsap.to(".Header__restart", {
                opacity: 1,
                duration: 1,
                pointerEvents: 'auto',
            });
        }else if(props.retLnd){
            const num = 0; 
            setBgPosition(num);

            gsap.to(".Header__restart", {
                pointerEvents: 'none',
            })

            gsap.to(".Header__restart", {
                opacity: 0,
                duration: 1,
                pointerEvents: 'none',
            });

            gsap.to(".Background__wrapper", {
                y: `${num}%`, 
                duration: 1
            });
            gsap.to(".Nav2__wrapper", {
                y: '100vh', 
                duration: 1, 
            });   
            gsap.to('.Spider__Container', {
                y: '100vh',
                duration: 1,
            });
        }else if(props.type===1){
            animations.nav2Anim(true);
        }else if(!props.text){
            animations.nav2Anim(false);            
        }

        if(props.pnlID === 6){
            $('.Header').addClass('Header--1'); 


            if(Number($('body').width()) < 1025){
                gsap.to('.Nav2__wrapper', {
                    opacity: 0,
                    duration: .5
                });
            }
        }

        if(props.pnlID===6 && Number($('body').width() < 1025)){
            var rule = CSSRulePlugin.getRule(".Header:after"); 

            gsap.to(rule, {
                backgroundColor: '#233b3f',
                duration: 1,
            })            
        }

        animations.animSpiderNodePerf(props);
    };

    // const animNavUpHandlr = (text) => {
    //     // gsap.to(".Header__restart", {
    //     //     opacity: 0,
    //     //     duration: 1,
    //     // });
    //     const animateThis = () => {
    //         gsap.to('.Nav1__arrow--up',{
    //             backgroundImage:"url('./assets/chevy-4.svg')",
    //             duration: .5,
    //         });
    //     }
        
    //     if(text===undefined){
    //         animateThis();
    //     }
    // }   

    const direction = props.text ? true : false;

    const btnId = props.text ? `Next_${props.nextBtnIdx}` : `Prev_${props.nextBtnIdx}`;

    return (
        <div 
            className={classNav1.join(' ')}
            id={btnId}
            onClick={() => {
                props.clicked(direction)
                animHandlr()  
            }}>
            {props.text && <div className="Nav1__text">{props.text}</div>}
            <div 
            className={classArrow.join(' ')}
            ></div>
        </div>
    );
}

const mapStateToProps = state => { 
    return {
        specificScore: state.scoreReducer.specificScore,
    }
}

export default connect(mapStateToProps,null)(Nav1);