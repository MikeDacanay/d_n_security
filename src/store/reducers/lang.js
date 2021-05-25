import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    currentLang: 'English',
    EXISTING_LANGS: [
        'English',
        'French',
        'German', 
        'Italian',
        'PortugueseBR',                               
        'Russian',
        'Spanish',         
        'SpanishLAD',        
        'Turkish',
    ]
}

const choose_lang = (state, action) => {
    return updateObject(state, {
        currentLang: action.lang,
    }); 
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.CHOOSE_LANG){
        return choose_lang(state, action);
    }
    return state;
};

export default reducer;