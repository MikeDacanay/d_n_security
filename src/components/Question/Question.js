import React from 'react';

import './Question.scss';

const Question = props => {
    return (
        <div className="Question"> 
            {props.question}
        </div>
    )
}

export default Question;