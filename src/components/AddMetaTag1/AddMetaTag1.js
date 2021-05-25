// import { add } from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

const AddMetaTag1 = props => {

    // console.log(props.currentLang);

    let retThis = null;

    if(props.currentLang === 'Spanish' || props.currentLang === 'SpanishLAD'){
        retThis = (
            <Helmet>
                <meta name="Language" content="es"/>
                <meta name="country" content="Latin America"></meta>                
            </Helmet>
        )
    }

    if(props.currentLang === 'PortugueseBR'){
        retThis = (
            <Helmet>
                <meta name="country" content="Brazil"/>
                <meta name="Language" content="pt"/>               
            </Helmet>
        )
    }

    return retThis;
};  

const mapStateToProps = state => {
    return {
        currentLang: state.langReducer.currentLang,
    }
}

export default connect(mapStateToProps, null)(AddMetaTag1);