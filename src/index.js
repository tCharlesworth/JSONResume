import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/header';
import {Router, Route, hashHistory } from 'react-router';

import Home from './views/home';
import MyData from './views/myData';
import Wizard from './views/wizard';
  import WizardIndex from './views/wizardIndex';
  import WizardBasics from './views/wizardBasics';
  import WizardLocation from './views/wizardLocation';
  import WizardProfiles from './views/wizardProfiles';
  import WizardWork from './views/wizardWork';
  import WizardVolunteer from './views/wizardVolunteer';
  import WizardEducation from './views/wizardEducation';
  import WizardAwards from './views/wizardAwards';
  import WizardPublications from './views/wizardPublications';
  import WizardSkills from './views/wizardSkills';
  import WizardLanguages from './views/wizardLanguages';
  import WizardInterests from './views/wizardInterests';
  import WizardReferences from './views/wizardReferences';
  import WizardDone from './views/wizardDone';
import Build from './views/build';
import Past from './views/past.js';

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/home" component={Home} />
        <Route path="/myData" component={MyData} />
        <Route path="/wizard" component={Wizard}>
          <Route path='/wizard/index' component={WizardIndex} />
          <Route path='/wizard/basics' component={WizardBasics} />
          <Route path='/wizard/location' component={WizardLocation} />
          <Route path='/wizard/profiles' component={WizardProfiles} />
          <Route path='/wizard/work' component={WizardWork} />
          <Route path='/wizard/volunteer' component={WizardVolunteer} />
          <Route path='/wizard/education' component={WizardEducation} />
          <Route path='/wizard/awards' component={WizardAwards} />
          <Route path='/wizard/publications' component={WizardPublications} />
          <Route path='/wizard/skills' component={WizardSkills} />
          <Route path='/wizard/languages' component={WizardLanguages} />
          <Route path='/wizard/interests' component={WizardInterests} />
          <Route path='/wizard/references' component={WizardReferences} />
          <Route path='/wizard/done' component={WizardDone} />
        </Route>
        <Route path='/build' component={Build} />
        <Route path='/past' component={Past} />
      </Route>
    </Router>
  </div>
  , document.getElementById('root'));
