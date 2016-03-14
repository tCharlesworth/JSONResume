import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WizardReferences extends Component {
  render() {
    var styles = {
    };

    return (
      <div>
        <h3>Done</h3>
        <hr />
        <p>Congrats, that is all the data you can add to the resume!</p>

        <Link to='/myData'>View All Your Data</Link><br />
        <Link to='/build'>Build A Resume</Link><br />
        <Link to='/home'>Go Home</Link>
      </div>
    );
  }
}
