import * as actionTypes from './actionTypes';

export const choose_questions = (role, lang) => {
    return {
        type: actionTypes.CHOOSE_QUESTIONS,
        role: role,
        lang: lang,
	};
};

export const nav_question = (dir) => {
    return {
        type: actionTypes.NAV_QUESTION,
        dir: dir,
    }
}