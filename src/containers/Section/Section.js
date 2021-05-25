import React from 'react';

import './Section.scss';

const Section = props => {
    return (
        <div className={`Section Section--${props.side}`}>
            {props.children}
        </div>
    )
}

export default Section;