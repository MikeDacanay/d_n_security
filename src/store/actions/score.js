import * as actionTypes from './actionTypes';

export const update_score = (i, v) => {
	return {
        type: actionTypes.UPDATE_SCORE,
        index: i,
        value: v,
    };
};

export const update_peerscore = (r) => {
	return {
        type: actionTypes.UPDATE_PEERSCORE,
        role: r,
    };
};

// export const reset_scores = () => {
//     return {
//         type: actionTypes.RESET_SCORES,
//     }
// }

export const init_scores = (arr) => {
    return {
        type: actionTypes.INIT_SCORES,
        scores: arr
    }
}