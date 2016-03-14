import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WizardReferences extends Component {
  render() {
    var styles = {
    };

    return (
      <div>
        <h3>Index</h3>
        <hr />
        <p>
          This wizard will help you to quickly and easily add as much
        information as possible to your resume data collection. To start
        and go through the whole wizard, just click the start link. You can
        also click on one of the section titles to jump straight to that
        section of the wizard.
        </p>
        <ul>
          <li><Link to='/wizard/basics'>Basics</Link></li>
          <li><Link to='/wizard/location'>Location</Link></li>
          <li><Link to='/wizard/profiles'>Profiles</Link></li>
          <li><Link to='/wizard/work'>Work</Link></li>
          <li><Link to='/wizard/volunteer'>Volunteer</Link></li>
          <li><Link to='/wizard/education'>Education</Link></li>
          <li><Link to='/wizard/awards'>Awards</Link></li>
          <li><Link to='/wizard/publications'>Publications</Link></li>
          <li><Link to='/wizard/skills'>Skills</Link></li>
          <li><Link to='/wizard/languages'>Languages</Link></li>
          <li><Link to='/wizard/interests'>Interests</Link></li>
          <li><Link to='/wizard/references'>References</Link></li>
        </ul>
      </div>
    );
  }
}
