import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WizardSkills extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      name: '',
      level: '',
      keyword: '',
      keywords: [],
      allData: {},
      skills: []
    };

    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      this.state.allData = data;
      if(data.skills) {
        this.state.skills = data.skills;
      }
    }

    //functions
    this._addKeyword = this._addKeyword.bind(this);
    this._saveSkill = this._saveSkill.bind(this);
    this._saveState = this._saveState.bind(this);
    this._removeSkill = this._removeSkill.bind(this);
  }

  _saveSkill() {
    var newSkill = {
      name: this.state.name,
      level: this.state.level,
      keywords: this.state.keywords
    };
    this.state.skills.push(newSkill);
    this._saveState();
  }

  _removeSkill( idx ) {
    this.state.skills.splice(idx, 1);
    this._saveState();
  }

  _addKeyword() {
    if(this.state.keyword) {
      this.state.keywords.push(this.state.keyword);
      this.setState({keyword: ''});
    }
  }

  _saveState() {
    var allData = this.state.allData;
    allData.skills = this.state.skills;
    localStorage.setItem('jrmgrstate', JSON.stringify(allData));
    this.state.name = '';
    this.state.level = '';
    this.state.keyword = '';
    this.state.keywords = [];
    this.setState({skills: allData.skills});
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
        <h3>Skills</h3>
        <hr />

        <div style={styles.left}>
          <div style={styles.inputBox}>
            <p style={styles.label}>Name</p>
            <input type='text' placeholder='name' value={this.state.name} onChange={ (event)=> this.setState({name: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Level</p>
            <input type='text' placeholder='level' value={this.state.level} onChange={ (event)=> this.setState({level: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Keywords</p>
            <input type='text' placeholder='keyword' value={this.state.keyword} onChange={ (event)=> this.setState({keyword: event.target.value}) } style={styles.input}/>
          </div>
          <button onClick={this._addKeyword}>Add</button>
          <ul>
            {this.state.keywords.map(( item )=>{
              return (
                <li>{item}</li>
              )
            })}
          </ul>
          <button onClick={this._saveSkill}>Add Skill</button>
        </div>
        <div style={styles.right}>
          {this.state.skills.map(( item, idx )=>{
            return (
              <div>
                <h4>{item.name}</h4>
                <ul>
                  <li>{item.level}</li>
                  <ul>
                    {item.keywords.map(( item )=>{
                      return (
                        <li>{item}</li>
                      )
                    })}
                  </ul>
                </ul>
                <button onClick={this._removeSkill.bind(this, idx)}>Delete</button>
              </div>
            )
          })}
        </div>
        <div style={styles.stretch}></div>
        <br />

        <Link to='/wizard/publications' style={styles.nav}>Back</Link>
        <Link to='/wizard/languages' style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
