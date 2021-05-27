import * as actionTypes from '../actions/actionTypes';
import {
    updateObject
} from '../utility';

const initialState = {
    currentRole: 'Choose your role',
    currentTxtRole: 'Choose your role',
    EXISTING_ROLES: [
        {
            English: 'Choose your role',
            German: 'Funktion auswählen',
            French: 'Quel poste occupez-vous ?',
            Russian: 'Выберите свою роль',
            Turkish: 'Görevinizi Seçin',
            Italian: 'Seleziona il tuo ruolo',
            Spanish: 'Seleccione su cargo',
            PortugueseBR: 'Selecione sua função',
            SpanishLAD: 'Selecciona tu cargo'
        },
        {
            English: 'Sr Cybersecurity Mgmt (e.g. CISO, CSO, VP/Dir of security)'
        },
        {
            English: 'Cloud Architec / Cloud Security Architect'
        },
        {
            English: 'Cybersecurity Operations Staff (SecOps, SOC)'
        },
        {
            English: 'Threat / Malware Response team'
        },
        {
            English: 'Sr IT Mgmt (e.g. CIO, VP/Dir of IT)'
        },
        {
            English: 'IT Operations staff (e.g. admin, operators, support)'
        },
        {
            English: 'Network Infrastructure and Operations'
        },
        {
            English: 'Identity, Access and Entitlements mgmt/operations'
        },
        {
            English: 'Cloud Infrastructure (IaaS, containers, virtualization)'
        },
        {
            English: 'Application Security / Operations (PaaS/SaaS)'
        },
        {
            English: 'Database Security (administration)'
        },
        {
            English: 'Data Protection Officer / Data Privacy Officer'
        },
        {
            English: 'IT Audit / Regulatory Compliance'
        },
    ],
}

const choose_role = (state, action) => {

    const arrOfRoles = state.EXISTING_ROLES;

    let index;

    arrOfRoles.find(function(obj, idx){        
        
        if(obj.English === action.role){
            index = idx;
        };  
        
        return;
    });

    return updateObject(state, {
        currentRole: action.role,
        currentTxtRole: arrOfRoles[index][action.lang],        
    });
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.CHOOSE_ROLE) {
        return choose_role(state, action);
    }
    return state;
};

export default reducer;
