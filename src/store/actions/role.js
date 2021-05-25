import * as actionTypes from './actionTypes';

export const choose_role = (role, lang) => {
        return {
                type: actionTypes.CHOOSE_ROLE,
                role: role,
                lang: lang,
	};
};