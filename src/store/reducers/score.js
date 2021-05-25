import * as actionTypes from '../actions/actionTypes';
import peerScoreSet from '../../libs/peerScoreSets/peerScoreSets';
import {updateObject} from '../utility';

const initialState = {
    overallScore: 0,
    specificScore: [0,0,0,0,0,0],
    peerScore: [0,0,0,0,0,0]
}

const update_score = (state = initialState, action) => { 
    const arr = [...state.specificScore];

    arr[action.index] = action.value;

    const avgScore = (arr.reduce((total, num)=>total+num))/arr.length;

    return updateObject(state, {
        overallScore: avgScore,
        specificScore: arr,
    }); 
};

const update_peerscore = (state = initialState, action) => {
    return updateObject(state, {
        peerScore: peerScoreSet[action.role],
    });
};

const init_scores = (state = initialState, action) => {
    return updateObject(state, {
        specificScore: action.scores,
    })
};

// const reset_scores = (state = initialState, action) => {
//     return updateObject(state, {
//         specificScore: state.specificScore.map(score => 0),
//     });
// };

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.UPDATE_SCORE){
        return update_score(state, action);
    }
    // if(action.type === actionTypes.RESET_SCORES){
    //     return reset_scores(state, action);
    // }
    if(action.type === actionTypes.INIT_SCORES){
        return init_scores(state, action);
    }
    if(action.type === actionTypes.UPDATE_PEERSCORE){
        return update_peerscore(state, action)
    }

    return state;
};

export default reducer;