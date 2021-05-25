import React from 'react';

import './LangOptions';

const LangOptions = props => {
    return (
        <select id="lang" onChange={(e)=>props.changed(e.target.value)}>
            {props.langs.map((lang,i) => {
                
                let langText;
                console.log(lang === 'French');
                if(lang === 'English'){
                    langText = 'English';
                }else if(lang === 'French'){
                    langText = 'Français';
                }else if(lang === 'German'){
                    langText = 'Deutsch';
                }else if(lang === 'Italian'){
                    langText = 'Italiano';
                }else if(lang === 'Portuguese'){
                    langText = 'Português';
                }else if(lang === 'Russian'){
                    langText = 'Русский';
                }else if(lang === 'Spanish'){
                    langText = 'Español'
                }else if(lang === 'SpanishLAD'){
                    langText = 'Español (Lantinoamérica)'
                }else if(lang === 'Turkish'){
                    langText= 'Türkçe';
                }
            
                return (
                    <option 
                        value={lang}
                        key={`lang-${i}`}>
                        {langText}
                    </option>
                )
            })};
        </select>
    );
}

export default LangOptions;