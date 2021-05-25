import { gsap } from "gsap";
import $ from 'jquery';

export const nav2Anim = selectSibling => {
    const animation = gsap.timeline();

    //animating line + txt
    gsap.to('.Nav2__item-activate .Nav2__item--text', {
        // backgroundColor: '#bcd5d5',
        opacity: '.0',
        // width: '.8rexm',
        duration: .5,
    })
    
    animation.to('.Nav2__item-activate .Nav2__item--line', {
        backgroundColor: '#bcd5d5',
        opacity: '.6',
        width: '.8rem',
        duration: .5,
    })
    .then((anim) => {                
        const activatedClass = document.getElementsByClassName("Nav2__item-activate")[0];
        
        const sibling = selectSibling ? activatedClass.nextSibling : activatedClass.previousSibling;

        activatedClass.classList.remove("Nav2__item-activate");
        sibling.classList.add("Nav2__item-activate");


        console.log($('.Header').width());

        let nav2ItemLine = '1.6rem';

        if($('.Header').width() < 1025){
            nav2ItemLine = '1.2rem';
        }

        anim.to('.Nav2__item-activate .Nav2__item--line', {
            backgroundColor: '#f0cc71',
            opacity: '1',
            width: nav2ItemLine,
            duration: .5,
        });

        gsap.to('.Nav2__item-activate .Nav2__item--text', {
            opacity: '.6',
            duration: .5, 
        });
    }); 
}

export const animSpiderNodePerf = (props) => {

    const specificScoreLen = props.specificScore.length;

    if(specificScoreLen === props.nextBtnIdx+1){
        const spiderNodes1 = document.querySelectorAll(".Spider__node--1");
        const spiderNodes2 = document.querySelectorAll(".Spider__node--2");
        const spiderLegends = document.querySelectorAll('.Spider__Legend');
        props.specificScore.findIndex((score, i) => {
            if(score === 100){
                const tarSpiderNode1 = spiderNodes1[i];
                const tarSpiderNode2 = spiderNodes2[i]; 
                const tarSpiderLegend = spiderLegends[i];                
                gsap.to(tarSpiderNode1, {
                    opacity: 0, 
                    duration: .5,
                })
                .delay(1);
                gsap.to(tarSpiderNode2, {
                    opacity: 0, 
                    duration: .5,
                })
                .delay(1);   
            
                gsap.to(tarSpiderLegend, {
                    fill: 'rgb(255,255,255)', 
                    duration: .5,
                })
                .delay(1);   
            }           
        })
                
    }
}


