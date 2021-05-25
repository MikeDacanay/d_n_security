import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {    
    showDemo: false,       
}

const toggle_demo = (state = initialState, action) => {
    return updateObject(state, {
        showDemo: !state.showDemo,        
    }); 
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.TOGGLE_DEMO){
        return toggle_demo(state, action);
    };
    return state;
};

export default reducer;