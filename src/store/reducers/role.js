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
            English: 'CEO',
            German: 'CFO',
            French: 'Directeur financier et administratif',
            Russian: 'Директор финансового департамента',
            Turkish: 'CFO',
            Italian: 'CFO',
            Spanish: 'CFO',
            PortugueseBR: 'CFO',
            SpanishLAD: 'CFO'
        },
        {
            English: 'CIO / VP IT',
            German: 'VP oder Direktor Finanzdienstsysteme ',
            French: 'Vice-Président ou Responsable des systèmes financiers ',
            Russian: 'Вице-президент или ИТ-директор по сопровождению фин. систем ',
            Turkish: 'BY veya Finansal Sistemler Direktörü',
            Italian: 'VP o Responsabile IT delle applicazioni per l\'area Finance (AFC)',
            Spanish: 'VP o director de sistemas financieros',
            PortugueseBR: 'Vice-presidente ou Diretor de sistemas financeiros',
            SpanishLAD: 'Vicepresidente o Director de Sistemas Financieros '
        },
        {
            English: 'Java Developer',
            German: 'Leitende Prüfer',
            French: 'Directeur de l’audit interne',
            Russian: 'Руководитель внутреннего аудита',
            Turkish: 'Baş Denetçi',
            Italian: 'Responsabile dell\'Internal Auditing, Risk Manager',
            Spanish: 'Director ejecutivo de auditorías ',
            PortugueseBR: 'Diretor executivo de auditoria ',
            SpanishLAD: 'Director Ejecutivo de Auditoría '
        },
        {
            English: 'Java Operations'
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
