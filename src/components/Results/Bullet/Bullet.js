import React from 'react';

import './Bullet.scss';

const Bullet = props => {
    const BulletClass = [
        'Bullet', 
        props.score === 100 ? "Bullet--1" : 'Bullet--2',
    ];

    return (
        <div className={BulletClass.join(' ')}>
            <div className="Bullet__header">
                <div className="Bullet__radio Bullet__radio--1"></div>
                <div className="Bullet__title">{props.title}</div>
            </div>
            <div className="Bullet__copy">
                <div className="Bullet__copy--main">
                    {props.mainN}
                </div>
                <a href={props.subNLink} target="_blank" rel='noreferrer' className="Bullet__copy--sub">
                    <span>{props.subNLinkText}</span>
                </a>
            </div>
        </div>
    )
}

export default Bullet;