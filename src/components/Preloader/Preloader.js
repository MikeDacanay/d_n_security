import React from 'react';
import lottie from 'lottie-web';
import { gsap } from "gsap";

import loadLoop from './libs/loading-loop.json';

import './Preloader.scss';

const Preloader = props => {

    const animatePreload = () => {
        lottie.loadAnimation({
            container: document.getElementById('Preload__container'),
            renderer: 'svg',
            autoplay: true,
            animationData: loadLoop,
            loop: true,
        });

        gsap.to(".Preload", {
            opacity: 0, 
            duration: .5,
        })
        .delay(3);

        gsap.to('.Preload', {
            display: 'none'
        })
        .delay(4);
    };

    animatePreload();

    return (
        <div className="Preload">
            <div id="Preload__container">                
            </div>
        </div>
    )
};

export default Preloader;

