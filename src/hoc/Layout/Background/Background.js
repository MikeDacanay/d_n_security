import React from 'react';

import './Background.scss';

const Background = props => {
    return (
        <div className="Background">
            <div className="Background__wrapper Background__wrapper--1" id='Background__wrapper--1'>
                <div className="Background__section Background__section--1">
                    <div className="Background__img Background__img--1"></div>
                </div>
                <div className="Background__section Background__section--2">
                    <div className="Background__img Background__img--2"></div>
                </div>
            </div>
            <div className="Background__wrapper Background__wrapper--2" id='Background__wrapper--2'>
                <div className="Background__section Background__section--3">
                    <div className="Background__img Background__img--3"></div>
                </div>
                <div className="Background__section Background__section--4">
                    <div className="Background__img Background__img--4"></div>
                </div>
            </div>
        </div>
    )
}

export default Background;