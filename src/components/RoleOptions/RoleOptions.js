import React, {useEffect} from 'react';
import { gsap } from 'gsap'; 
import { connect } from 'react-redux';
import $ from 'jquery';
import QuestionSets from '../../libs/QuestionSets';

import * as actionCreators from '../../store/actions/index';
// import Question from '../Question/Question';

import './RoleOptions.scss';

    
const RoleOptions = props => {

    let rolesz = [...props.roles];
    const rolePlaceholder= [rolesz[0]];
    rolesz.shift();

    useEffect(() => {        
        return () => {
            const roleOptions = $('.role__option').remove().toArray();
            
            const newRoleOptions = roleOptions.sort((a,b) => ($(a).text() > $(b).text()) ? 1 : -1);
        
            $('.Role__select').append(newRoleOptions);
        }
    }, [props.currentLang])

    const roleChangeHandlr = (e) => {

        if(e.target.value !== 'None'){
            gsap.to('.Nav1--1', {
                opacity: 1, 
                pointerEvents: 'all',
                duration: 1
            });        
            props.changed(e.target.value, props.currentLang);
        }else{
            gsap.to('.Nav1--1', {
                opacity: 0.3, 
                pointerEvents: 'none',
                duration: 1
            }); 
        }

        const  qLen = QuestionSets[e.target.value].length;

        props.onInitQuestions(Array(qLen).fill(0));
        
        props.onUpdatePeerScores(e.target.value);

        $(".Answer__radio").prop( "checked", false );
        $('.Answer').css('opacity', '1');
    }

    return (
        <div className="Role__select--wrapper">
            {/* <select className='Role__select' id="role" onChange={(e)=>props.changed(e.target.value)}> */}
            <select className='Role__select' id="role" name='role' onChange={(e)=>roleChangeHandlr(e)}>
                {rolePlaceholder.map((role,i) =>{
                    if(role.English === "Choose your role"){                                                                        
                        return (
                            <option 
                                value='None'
                                key={`role-${i}`}>
                                {role[props.currentLang]}
                            </option>
                        )
                    }
                })}
                {rolesz.map((role,i) =>{
                    return (
                        <option 
                            value={role.English}
                            key={`role-${i}`}
                            className="role__option">
                            {role[props.currentLang]}
                        </option>
                    )                  
                })};


{/* list.sort((a, b) => (a.color > b.color) ? 1 : -1) */}
            </select>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentLang: state.langReducer.currentLang,
        currentQuestions: state.questionsReducer.currentQuestions,
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        onInitQuestions: (arr) => dispatch(actionCreators.init_scores(arr)),
        // onResetScores: () => dispatch(actionCreators.reset_scores()),
        onUpdatePeerScores: (r) => dispatch(actionCreators.update_peerscore(r)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoleOptions);