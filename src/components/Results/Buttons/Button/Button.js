import React from 'react';
import ClipboardJS from 'clipboard';
import $ from 'jquery';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../store/actions/index';

import ResultSet from '../../../../libs/ResultSet';

import './Button.scss';

const Button = props => {
    let retThis = '';
    
    new ClipboardJS('.btn--1');

    const urlLinkHandlr = () => {
        $('.Button__copied').addClass('Button__copied--show');

        setTimeout(() => {
            $('.Button__copied').removeClass('Button__copied--show');
        }, 2000);
    };

    const demoHanldr = () => {
        props.onToggleDemo();
    }

    if(props.type===1){
        retThis = (
            <div className="Button Button--2" onClick={demoHanldr}>
                <div className="Button__img"></div>
                <div className="Button__txt">{ResultSet.btn1[props.currentLang]}</div>
            </div>
        )
    }else if(props.type===2){

        const hostURL = window.location.host;
        const pathURL = window.location.pathname;
        const roleSend = props.currentRole.replace(/&/g, '@');


        retThis = (
            <React.Fragment>
                <div 
                    className="Button Button--1 btn--1" 
                    data-clipboard-action="copy" 
                    data-clipboard-text={`${hostURL}${pathURL}?role=${roleSend.replace(/ /g, '+')}&score=${props.specificScore.join('_')}&lang=${props.currentLang}`}
                    onClick={urlLinkHandlr}
                    >
                    <div className="Button__img" ></div>
                    <div className="Button__txt">{ResultSet.btn2[props.currentLang]}</div>               
                </div>
                <div className="Button__copied">{ResultSet.copied[props.currentLang]}</div>
            </React.Fragment>
        )    
    }
    return retThis;    
}

const mapStateToProps = state => { 
    return {
        currentRole: state.roleReducer.currentRole,
        specificScore: state.scoreReducer.specificScore,
        currentLang: state.langReducer.currentLang,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleDemo: () => dispatch(actionCreators.toggle_demo()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Button);