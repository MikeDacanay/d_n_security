import React from 'react';

import Background from './hoc/Layout/Background/Background';
import Header from './hoc/Layout/Header/Header';
import Main from './hoc/Layout/Main/Main';

import Section from './containers/Section/Section';
import Panels from './containers/Panels/Panels';

import AddMetaTag1 from './components/AddMetaTag1/AddMetaTag1';
import Nav2 from './components/Navigation/Nav2/Nav2';
import Footer from './components/Footer/Footer';
import Gate from './components/Gate/Gate';
import Gate1 from './components/Gate/Gate1';
import Saleschat from './components/Saleschat/Saleschat';
import SrcBox from './components/SrcBox/SrcBox';

import QuestionSets from './libs/QuestionSets';

import './App.scss';
import SpiderClass from './components/Spider/SpiderClass';

const App = (props) => {
  const search = window.location.search; // could be '?foo=bar'
  const params = new URLSearchParams(search);
  const finish = params.get('finish');

  let srcBox = finish ? null : (<SrcBox/>);
  
  return (
    <React.Fragment>
      {/* <AddMetaTag1/> */}
      {/* <Saleschat/> */}
      {/* <Gate/>
      <Gate1/>   */}
      <SrcBox/>
      <Header />
      <Main>
        <Section
          side={'left'}
        >
        <Panels
          panels={QuestionSets}
        />
        </Section>
        <Section
          side={'right'}
        >
          <SpiderClass
          // levels={3}
          />
          {/* <Spider
            panels={QuestionSets}
          /> */}
          {/* <Radar
            width={500}
            height={500}
            padding={70}
            domainMax={10}
            highlighted={null}
            onHover={(point) => {
              if (point) {
                console.log('hovered over a data point');
              } else {
                console.log('not over anything');
              }
            }}
            data={{
              variables: [
                { key: 'resilience', label: 'Resilience' },
                { key: 'strength', label: 'Strength' },
                { key: 'adaptability', label: 'Adaptability' },
                { key: 'creativity', label: 'Creativity' },
                { key: 'openness', label: 'Open to Change' },
                { key: 'confidence', label: 'Confidence' },
              ],
              sets: [
                {
                  key: 'me',
                  label: 'My Scores',
                  values: {
                    resilience: 4,
                    strength: 6,
                    adaptability: 7,
                    creativity: 2,
                    openness: 8,
                    confidence: 1,
                  },
                },
                {
                  key: 'everyone',
                  label: 'Everyone',
                  values: {
                    resilience: 10,
                    strength: 8,
                    adaptability: 6,
                    creativity: 4,
                    openness: 2,
                    confidence: 0,
                  },
                },
              ],
            }}
          /> */}
        </Section>
      </Main>
      <Background />
      <Nav2
        questions={[...QuestionSets['CEO']]}
      />
      <Footer />
      <Saleschat/>
    </React.Fragment>
  );
}

export default App;


