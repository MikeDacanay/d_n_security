import React from 'react';

import './Socials.scss';

const Socials = props => {
    // return (
    //     <div className="Socials">            
    //         {/* <a rel='noreferrer' href="mailto:?&subject=Wanted%20to%20share%20CX%20Data%20Assessment%20tool&cc=&bcc=&body=Discover%20The%20Path%20to%20CX%20Data%20Excellence%0A%0Ahttp://dev.ineedcpr.com/oracle/2021/assessment_tools/cx_tool" class="nav__share--links" target="_blank">
    //             YYY
    //         </a> */}

    //         <a rel='noreferrer' href="https://www.facebook.com/sharer/sharer.php?u=http://dev.ineedcpr.com/oracle/2021/assessment_tools/cx_tool" class="nav__share--links" target="_blank">
    //             xyz
    //             {/* <img src="assets/facebook-24.svg" alt="facebook-24" class="nav__share--vendors">     */}
    //         </a>
    //         {/* <a href="https://twitter.com/intent/tweet?url=http://dev.ineedcpr.com/oracle/2021/assessment_tools/cx_tool&text=Discover%20The%20Path%20to%20CX%20Data%20Excellence%0A%0" class="nav__share--links" target="_blank">    
    //             ZZZ
    //         </a> */}  
    //          {/* <a rel='noreferrer' href="https://www.linkedin.com/shareArticle?mini=true&url=http://dev.ineedcpr.com/oracle/2021/assessment_tools/cx_tool" class="Social--1" target="_blank">
    //             XXX
    //         </a> */}      
    //     </div>
    // )

    return (
        <div className='Socials'>
            <div className="Socials__text">
                Share
            </div>
            <a rel='noreferrer' href="mailto:?&subject=Wanted%20to%20share%20CX%20Data%20Assessment%20tool&cc=&bcc=&body=Discover%20The%20Path%20to%20CX%20Data%20Excellence%0A%0Ahttp://dev.ineedcpr.com/oracle/2021/assessment_tools/cx_tool" className="Socials__icon Socials__icon--1" target="_blank"></a>
            <a rel='noreferrer' href="https://www.facebook.com/sharer/sharer.php?u=http://dev.ineedcpr.com/oracle/2021/assessment_tools/cx_tool" target="_blank" className="Socials__icon Socials__icon--2">
            </a>
            <a href="https://twitter.com/intent/tweet?url=https://dev.ineedcpr.com/oracle/2021/assessment_tools/cx_tool&text=Discover%20The%20Path%20to%20CX%20Data%20Excellence" className="Socials__icon Socials__icon--3" target="_blank">    
            </a>  
            <a rel='noreferrer' href="https://www.linkedin.com/shareArticle?mini=true&url=http://dev.ineedcpr.com/oracle/2021/assessment_tools/cx_tool" className="Socials__icon Socials__icon--4" target="_blank">
            </a>              
            {/* <div className="Socials__icon Socials__icon--1"></div>
            <div className="Socials__icon Socials__icon--2"></div>
            <div className="Socials__icon Socials__icon--3"></div>
            <div className="Socials__icon Socials__icon--4"></div> */}
        </div>    
    )
}

export default Socials;
