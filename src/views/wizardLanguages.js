import React, { Component } from 'react';
import { Link } from 'react-router';
import TextInput from '../components/textInput';

export default class WizardLanguages extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      language: '',
      fluency: '',
      allData: {},
      languages: []
    };

    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      this.state.allData = data;
      if(data.languages) {
        this.state.languages = data.languages;
      }
    }
    // functions
    this._addLanguage = this._addLanguage.bind(this);
    this._removeLanguage = this._removeLanguage.bind(this);
    this._saveState = this._saveState.bind(this);
  }

  _addLanguage() {
    var newLanguage = {
      language: this.state.language,
      fluency: this.state.fluency
    };
    this.state.languages.push(newLanguage);
    this._saveState();
  }

  _removeLanguage( idx ) {
    this.state.languages.splice(idx, 1);
    this._saveState();
  }

  _saveState() {
    var allData = this.state.allData;
    allData.languages = this.state.languages;
    localStorage.setItem('jrmgrstate', JSON.stringify(allData));
    console.log('Saved', allData);
    this.state.language = '';
    this.state.fluency = '';
    this.setState({languages: allData.languages});
  }

  render() {
    var styles = {
      label: {
        fontSize: '13px',
        marginBottom: '0px',
        marginLeft: '10px',
        textTransform: 'uppercase'
      },
      inputBox: {
        width: '80%',
        margin: 'auto'
      },
      input: {
        width: '100%',
        fontSize: '1.5em'
      },
      nav: {
        padding: '5px 20px',
        margin: '3px 20px',
        backgroundColor: 'dodgerblue',
        borderRadius: '3px',
        color: '#fff',
        textDecoration: 'none'
      },
      left: {
        float: 'left',
        width: '50%',
        borderRight: 'thin solid gray',
        boxSizing: 'border-box'
      },
      stretch: {
        clear: 'both'
      },
      right: {
        float: 'right',
        width: '50%',
        paddingLeft: '5%',
        boxSizing: 'border-box'
      }
    };

    return (
      <div>
        <h3>Languages</h3>
        <hr />

        <div style={styles.left}>
          <div style={styles.inputBox}>
            <p style={styles.label}>Language</p>
            <input type='text' placeholder='language' value={this.state.language} onChange={ (event)=> this.setState({language: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Fluency</p>
            <input type='text' placeholder='fluency' value={this.state.fluency} onChange={ (event)=> this.setState({fluency: event.target.value}) } style={styles.input}/>
          </div>
          <button onClick={this._addLanguage}>Add Language</button>
        </div>
        <div style={styles.right}>
          {this.state.languages.map(( item, idx )=>{
            return (
              <div>
                <h4>{item.language}</h4>
                <p>{item.fluency}</p>
                <button onClick={this._removeLanguage.bind(this, idx)}>Delete</button>
              </div>
            )
          })}
        </div>
        <div style={styles.stretch}></div>
        <br />

        <Link to='/wizard/skills' style={styles.nav}>Back</Link>
        <Link to='/wizard/interests' style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
