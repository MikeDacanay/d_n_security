import React from 'react';
import { gsap } from "gsap";
import './Gate2.scss';

const Gate2 = props => {

    const gate2SubmitHandlr = () => {
        gsap.to('.Gate2', {
            opacity: `0`,
            duration: 1,
        });
        gsap.to('.Gate2', {
            display: 'none',
        })
        .delay(2);
    };

    return (
        <div className="Gate2">
            <div className="Gate2__container">
                <div className="Gate2__header">
                    Please provide some information of your <span>Security Maturity</span>.
                </div>
                <div className="Gate2__form">
                    <div className="Gate2__field--container">
                        <div className="Gate2__field--label">Email</div>
                        <input type="text" className='Gate2__field--input'/>
                    </div>
                    <div className="Gate2__field--container">
                        <div className="Gate2__field--label">Name of organization</div>
                        <input type="text" className='Gate2__field--input'/>
                    </div>
                    <div className="Gate2__field--container">
                        <div className="Gate2__field--label">Country</div>
                        <input type="text" className='Gate2__field--input'/>
                    </div>
                    <div className="Gate2__field--container">
                        <div className="Gate2__field--label">Number of employees</div>
                        <select name="" id="" className='Gate2__field--dropdown'>
                            <option value="">Select Number of Employees</option>
                            <option value="">Less than 100</option>
                            <option value="">100 to 499</option>
                            <option value="">500 to 999</option>
                            <option value="">1,000 to 2,499</option>
                            <option value="">2,500 to 4,999</option>
                            <option value="">5,000 to 9,999</option>
                            <option value="">10,000 to 19,999</option>
                            <option value="">20,000 to 49,999</option>
                            <option value="">50,000 to 99,999</option>
                            <option value="">100,000 or more</option>
                        </select>
                    </div>
                    <div className="Gate2__field--container">
                        <div className="Gate2__field--label">Primary Industry</div>
                        <select name="" id="" className='Gate2__field--dropdown'>
                            <option value="">Select an industry</option>
                            <option value="">Business Services (accounting, consulting, legal, etc)</option>
                            <option value="">Consumer Packaged Goods</option>
                            <option value="">Construction / Engineering</option>
                            <option value="">Education (K12 - University)</option>
                            <option value="">Financial Services</option>
                            <option value="">Government (Federal / National)</option>
                            <option value="">Government (State and Local)</option>
                            <option value="">Health Care</option>
                            <option value="">Technology Services (hardware/software/services)</option>
                            <option value="">Life Sciences (biotech, pharmaceuticals, etc)</option>
                            <option value="">Manufacturing</option>
                            <option value="">Media (broadcast/social/digital)</option>
                            <option value="">Energy / Utilities</option>
                            <option value="">Retail / Wholesale</option>
                            <option value="">Telecommunications</option>
                            <option value="">Transportation &amp; Logistics</option>
                            <option value="">Other</option>
                        </select>
                    </div>
                </div>
                <div className="Gate2__submit" onClick={gate2SubmitHandlr}>
                    Submit
                </div>
            </div>            
        </div>
    )
}

export default Gate2;