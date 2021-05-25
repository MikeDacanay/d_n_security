import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Modal from '../../hoc/Modal/Modal';
import ResultSet from '../../libs/ResultSet';

import './Gate1.scss';

const Gate1 = props => {
    const iframeClickHandlr = () => {                   
        props.onToggleDemo();
    };

    const retThis = props.showDemo ? (
        <Modal
            showOut={props.showDemo}
        >
            <div className="Gate1__container">
                <div className="Gate1" onClick={iframeClickHandlr}></div> 
                <iframe title="demo tool request" frameborder="0" allowfullscreen="true" allow="fullscreen" src={`https://www.oracle.com/${ResultSet.cc[props.currentLang]}/asset/demo-assessment/form.html`} scrolling="no"></iframe>    
            </div>                                 
        </Modal>
    ): null;

    return retThis;
};

const mapStateToProps = state => {
    return {
        showDemo: state.uiReducer.showDemo,
        currentLang: state.langReducer.currentLang,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleDemo: () => dispatch(actionCreators.toggle_demo()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gate1);