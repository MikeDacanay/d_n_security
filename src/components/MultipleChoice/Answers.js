import React from 'react';

import Answer from './Answer/Answer';

import './Answers.scss';    

const Answers = props => {

    const valDir = (len, idx) => {
        return (props.dirDown ? (100 - ((100/len)* (0+idx)) ) : (100/len * (idx+1)));
    } 

    return (
        <div className="Answers">
            <form>
                {(props.answers.map((answer, i) =>
                    <Answer
                        answer={answer}
                        key={`Answer--${i}`}
                        pnlIdx={props.pnlIdx}
                        ansIdx={i}
                        type={props.type}
                        value={(props.type === 'checkbox') ? 
                            100/props.answers.length : 
                            // 100/props.answers.length * (i+1)
                            valDir(props.answers.length, i)
                        }
                    />
                ))}
            </form>
        </div>
    );
}

export default Answers;