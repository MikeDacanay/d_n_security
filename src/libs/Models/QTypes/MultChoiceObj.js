import HeaderMod from '../Modellibs/HeaderMod';

export default class QuestionObj {
    constructor(attr){
        this.currQ = attr.questionSet.English;
        this.currA = attr.answerSet.English;
        this.currNegCopy = this.negCopyRet();
        this.currNegLinkText = this.negLinkTxtRet();
        this.currNegLink = this.negLinkRet();
        this.type='multiplechoice'

        this.questionSet = attr.questionSet;
        this.answerSet = attr.answerSet;
        this.headerSet = this.hdrRet();
        // this.negCopy = attr.negCopy;
        // this.negLink = attr.negLink;

        this.currH = this.headerSet.English;
    }

    hdrRet(){
        const hdrRetThis = {};

        for (const [lang, question] of Object.entries(this.questionSet)) {  
            hdrRetThis[lang] = HeaderMod[question] ? HeaderMod[question]['header'] : null;                        
        }

        return hdrRetThis;
    }

    negCopyRet(){
        const negCopyRetThis = {...HeaderMod[this.currQ]};
        
        return negCopyRetThis['negCopy'];
    }

    negLinkTxtRet(){
        const negLinkTxtRetThis = {...HeaderMod[this.currQ]};
        
        return negLinkTxtRetThis.negLinkTxt;
    }

    negLinkRet(){
        const negLinkRetThis = {...HeaderMod[this.currQ]};
        
        return negLinkRetThis.negLink;
    }
}