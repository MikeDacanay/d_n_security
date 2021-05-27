import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import * as actionCreators from '../../../store/actions/index';

import LandingSet from '../../../libs/LandingSet';

import './Header.scss';

const Header = props => {

    useEffect(() => {   
        
        
        const langOptions = $('.Header__language--option').remove().toArray();
        
        const newlangOptions = langOptions.sort((a,b) => ($(a).text() > $(b).text()) ? 1 : -1);

        $('.Header__language').append(newlangOptions);

        $(`.${props.currentLang}`).prop('selected', 'selected');
    }, [props.currentQuestion])
    
    // useEffect(() => {        
    //     const langOptions = $('.Header__language--option').remove().toArray();
        
    //     const newlangOptions = langOptions.sort((a,b) => ($(a).text() > $(b).text()) ? 1 : -1);

    //     $('.Header__language').append(newlangOptions);
    
    //     $('.English').attr('selected', true);

    // },[])

    const langPickerHandlr = (e) => {
        props.onChangeLang(e.target.value);

        if(props.currentRole !== 'Choose your role'){
            props.onChooseQuestions(props.currentRole, e.target.value);
            props.onChangeRole(props.currentRole, e.target.value);
        }
    };

    $('.Header__language--1').change(function(){
        var text = $(this).find('option:selected').text()        
        var $aux = $('<select/>').append($('<option/>').text(text))
        // $('#__bkframe').addClass(props.currentLang);

        $('.ochat_slideout').removeClass('English Spanish SpanishLAD French German Italian PortugueseBR Russian Turkish');
        $('.ochat_modal').removeClass('English Spanish SpanishLAD French German Italian PortugueseBR Russian Turkish');

        $('.ochat_slideout').addClass(props.currentLang);
        $('.ochat_modal').addClass(props.currentLang);

        $(this).after($aux);
        $(this).width($aux.width()+35)
        $aux.remove()
      }).change()

    return (
        <header className="Header" role='header'>
            <div className="Header__strip"></div>            
            <div className="Header__wrapper">
                <div className="Header__logo"></div>
                
                {props.currentQuestion === 0 ? 
                    (   
                        <form>
                        <select className='Header__language Header__language--1 Header__btn' id="language" name='language' onChange={(e)=>langPickerHandlr(e)}>                    
                            {props.EXISTING_LANGS.map((lang,i) => {

                                let langText;
                                
                                if(lang === 'English'){
                                    langText = 'English';
                                }else if(lang === 'Spanish'){
                                    langText = 'Español'
                                }else if(lang === 'SpanishLAD'){
                                    langText = 'Español (Lantinoamérica)'
                                }else if(lang === 'French'){
                                    langText = 'Français';
                                }else if(lang === 'German'){
                                    langText = 'Deutsch';
                                }else if(lang === 'Italian'){
                                    langText = 'Italiano';
                                }else if(lang === 'PortugueseBR'){
                                    langText = 'Português (Br)';
                                }else if(lang === 'Russian'){
                                    langText = 'Русский';
                                }else if(lang === 'Turkish'){
                                    langText= 'Türkçe';
                                }
                                return (
                                    <option 
                                        className={`${props.EXISTING_LANGS[i]} Header__language--option`}                                        
                                        value={props.EXISTING_LANGS[i]}
                                        key={`lang-${i}`}>
                                        {langText}
                                    </option>
                                )                        
                            })}                
                        </select>
                        </form>
                    )
                    : (
                        <a href={`http://${window.location.host}${window.location.pathname}?lang=${props.currentLang}`} className="Header__restart Header__btn">
                            <div className="Header__restart--img"></div>
                            <div className="Header__restart--txt">{LandingSet.restartBtn[props.currentLang]}</div>
                        </a>
                    ) 
                }               
            </div>            
        </header>
    )
};


const mapStateToProps = state => { 
    return {
        currentLang: state.langReducer.currentLang,
        EXISTING_LANGS: state.langReducer.EXISTING_LANGS,
        currentQuestion: state.questionsReducer.currentQuestion,
        currentRole: state.roleReducer.currentRole,
        currentQuestions: state.questionsReducer.currentQuestions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeLang: (lang) => dispatch(actionCreators.choose_lang(lang)),     
        onChooseQuestions: (role, lang) => dispatch(actionCreators.choose_questions(role, lang)),      
        onChangeRole: (role, lang) => dispatch(actionCreators.choose_role(role, lang)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);