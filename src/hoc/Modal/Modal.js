import React from 'react';

import './Modal.scss';

const Modal = props => {
    let ModalClass = ['Modal', props.showOut ?  'Modal__show': ''];
    

    return (        
        <div className={ModalClass.join(' ')} onClick={props.clicked}>
            {props.children} 
        </div>  
    );
}

export default Modal;

