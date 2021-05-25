import * as actionTypes from './actionTypes';

export const choose_lang = (lang) => {
    return {
        type: actionTypes.CHOOSE_LANG,
        lang: lang,
	};
};