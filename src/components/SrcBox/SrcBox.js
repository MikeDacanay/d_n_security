import React from 'react'; 
import { connect } from 'react-redux';

import './SrcBox.scss';

const SrcBox = props => {

    const hostURL = window.location.host;
    const pathURL = window.location.pathname;
    const roleSend = props.currentRole.replace(/&/g, '@');

    const retThis = props.currentQuestion === 7 ? (
        <iframe title="analytics" className='SrcBox' src={`https://${hostURL}${pathURL}?finish=true&role=${roleSend.replace(/ /g, '+')}&score=${props.specificScore.join('_')}&lang=${props.currentLang}`}></iframe>
    ) : null;

    return retThis;
};

const mapStateToProps = state => { 
    return {
        currentRole: state.roleReducer.currentRole,
        specificScore: state.scoreReducer.specificScore,
        currentLang: state.langReducer.currentLang,
        currentQuestion: state.questionsReducer.currentQuestion,
    }
}

export default connect(mapStateToProps, null)(SrcBox);
