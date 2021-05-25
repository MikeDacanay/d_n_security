import React from 'react';
import { connect } from 'react-redux';
import './Saleschat.scss';

const Saleschat = props => {

    let retThis = null;

    if(props.currentLang === 'PortugueseBR'){
        retThis = (
            <script data-reqjq="" src="//www.oracle.com/asset/web/js/oracle-chat.js" class='ptrz' id="oracle_chat" data-nosidewall data-path="//www.oracle.com/asset/web/json/chat-translation-data.json"></script>
        ) 
    }
    if(props.currentLang === 'Spanish' || props.currentLang === 'SpanishLAD'){
        retThis = (
            <script data-reqjq="" src="//www.oracle.com/asset/web/js/oracle-chat.js" class='spnz' id="oracle_chat" data-nosidewall data-path="//www.oracle.com/asset/web/json/chat-translation-data.json"></script>
        );
    }
    
    return retThis;
};

const mapStateToProps = state => { 
    return {
        currentLang: state.langReducer.currentLang, 
    }
}

export default connect(mapStateToProps, null)(Saleschat);

