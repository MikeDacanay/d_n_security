import CEO_QSet from './roleQuestionSets/CEOQuestionSet';
import CIO_QSet from './roleQuestionSets/CIO_QuestionSet';
import DEV_QSet from './roleQuestionSets/DEV_QuestionSet';
import OPS_QSet from './roleQuestionSets/OPS_QuestionSet';
import None from './roleQuestionSets/None';

const QuestionSets = {
    'Choose your role': None,
    'CEO': CEO_QSet,
    'CIO / VP IT': CIO_QSet,
    'Java Developer': DEV_QSet,
    'Java Operations': OPS_QSet,
};       


export default QuestionSets;
