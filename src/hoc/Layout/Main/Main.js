import React from 'react';

import './Main.scss';

const Main = props => {
    // console.log(props.ma);
    return (
        <div className="Main" role='main'>
            {props.children}
        </div>
    )
}

export default Main;