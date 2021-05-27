import CEO_QSet from './roleQuestionSets/CEOQuestionSet';
import None from './roleQuestionSets/None';

const QuestionSets = {
    'Choose your role': None,
    'Sr Cybersecurity Mgmt (e.g. CISO, CSO, VP/Dir of security)': CEO_QSet,
    'Cloud Architec / Cloud Security Architect': CEO_QSet,
    'Cybersecurity Operations Staff (SecOps, SOC)': CEO_QSet,
    'Threat / Malware Response team': CEO_QSet,
    'Sr IT Mgmt (e.g. CIO, VP/Dir of IT)': CEO_QSet,
    'IT Operations staff (e.g. admin, operators, support)': CEO_QSet,
    'Network Infrastructure and Operations': CEO_QSet,
    'Identity, Access and Entitlements mgmt/operations': CEO_QSet,
    'Cloud Infrastructure (IaaS, containers, virtualization)': CEO_QSet,
    'Application Security / Operations (PaaS/SaaS)': CEO_QSet,
    'Database Security (administration)': CEO_QSet,
    'Data Protection Officer / Data Privacy Officer': CEO_QSet,
    'IT Audit / Regulatory Compliance': CEO_QSet, 
};       


export default QuestionSets;
