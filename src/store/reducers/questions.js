import * as actionTypes from '../actions/actionTypes';
import QuestionSets from '../../libs/QuestionSets';
import {updateObject} from '../utility';
import HEADER_MOD from '../../libs/Models/Modellibs/HeaderMod';


const initialState = {
    currentQuestions: [...QuestionSets['Choose your role']],
    currentLabels: [...QuestionSets['Choose your role'].map(qset => qset.currH)],
    currentQuestion: 0,       
}

const choose_questions = (state = initialState, action) => {


    const curLbls = QuestionSets[action.role].map(qset => qset.currH = qset.headerSet[action.lang]);

    const currQs = [...QuestionSets[action.role]].map(

        qset => {
            qset.currQ = qset.questionSet[action.lang];
            qset.currH = qset.questionSet;
            qset.currNegLink = HEADER_MOD[qset.currQ].negLink
            qset.currNegLinkText = HEADER_MOD[qset.currQ].negLinkTxt;
            qset.currNegCopy = HEADER_MOD[qset.currQ].negCopy; 

            return qset;
        }
    );
    
    
    return updateObject(state, {
        currentQuestions: [...QuestionSets[action.role]],        
        currentLabels: curLbls,
    }); 
}

const nav_question = (state = initialState, action) => {
    return updateObject(state, {
        currentQuestion: state.currentQuestion+action.dir,        
    }); 
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.CHOOSE_QUESTIONS){
        return choose_questions(state, action);
    };
    if(action.type === actionTypes.NAV_QUESTION){
        return nav_question(state, action);
    }
    return state;
};

export default reducer;