import React from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import ResultSet from '../../libs/ResultSet';

import './Footer.scss';

const Footer = props => {
    
    // const footerWrapperClass = ['Footer__wrapper', `Footer__wrapper${props.addClass}`]

    return (        
        <div className='Footer__wrapper' role='contentinfo'>
            <div className="Footer__content">
                <a target='_blank' rel='noreferrer' href={ResultSet.copyright[props.currentLang]} className="Footer__link">© 2021 Oracle</a>
                <span className='Footer__line'></span>
                <a target='_blank' rel='noreferrer' href={ResultSet.footerLink1[props.currentLang]} className="Footer__link">{ResultSet.footer1[props.currentLang]}</a>
                {/* <a target="_blank" rel='noreferrer' id='teconsent' className="Footer__link">Cookie Preference</a> */}
                <a target="_blank" rel='noreferrer' id='teconsent' className="Footer__link"></a>
                <a target="_blank"  rel='noreferrer' href={ResultSet.footerLink2[props.currentLang]} className="Footer__link">{ResultSet.footer2[props.currentLang]}</a>
            </div>            
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        currentLang: state.langReducer.currentLang,
    }
}

export default connect(mapStateToProps, null)(Footer);