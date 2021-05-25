import React from 'react';

import Button from './Button/Button';

import './Buttons.scss';

const Buttons = props => {
    const locationOrigin = window.location.origin;

    return (        
        <div className="Buttons">
            <Button
                type={1}
            />
            <Button
                type={2}
                locationOrig= {locationOrigin}
            />
        </div>
    );
}

export default Buttons;

