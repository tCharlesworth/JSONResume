import React, { Component } from 'react';
import { Link } from 'react-router';
import TextInput from '../components/textInput';

export default class WizardAwards extends Component {
  constructor( props ) {
    super(props);

    this.state = {
      title: '',
      date: '',
      awarder: '',
      summary: '',
      awards: [],
      allData: {}
    };

    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      this.state.allData = data;
      if(data.awards) {
        this.state.awards = data.awards;
      }
    }

    //functions
    this._addAward = this._addAward.bind(this);
    this._removeAward = this._removeAward.bind(this);
    this._saveState = this._saveState.bind(this);
  }

  _addAward() {
    var newAward = {
      title: this.state.title,
      date: this.state.date,
      awarder: this.state.awarder,
      summary: this.state.summary
    };

    this.state.awards.push(newAward);
    this._saveState();
  }

  _removeAward( idx ) {
    this.state.awards.splice(idx, 1);
    this._saveState();
  }

  _saveState() {
    var allData = this.state.allData;
    allData.awards = this.state.awards;
    localStorage.setItem('jrmgrstate', JSON.stringify(allData));

    this.state.title = '';
    this.state.date = '';
    this.state.awarder = '';
    this.state.summary = '';
    this.setState({awards: allData.awards});
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
        <h3>Awards</h3>
        <hr />

        <div style={styles.left}>
          <div style={styles.inputBox}>
            <p style={styles.label}>Title</p>
            <input type='text' placeholder='title' value={this.state.title} onChange={ (event)=> this.setState({title: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Date</p>
            <input type='text' placeholder='date' value={this.state.date} onChange={ (event)=> this.setState({date: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Awarder</p>
            <input type='text' placeholder='awarder' value={this.state.awarder} onChange={ (event)=> this.setState({awarder: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Summary</p>
            <input type='text' placeholder='summary' value={this.state.summary} onChange={ (event)=> this.setState({summary: event.target.value}) } style={styles.input}/>
          </div>
          <button onClick={this._addAward}>Add Award</button>
        </div>
        <div style={styles.right}>
          {this.state.awards.map(( item, idx )=>{
            return (
              <div>
                <h4>{item.title}</h4>
                <ul>
                  <li>{item.date}</li>
                  <li>{item.awarder}</li>
                  <li>{item.summary}</li>
                </ul>
                <button onClick={this._removeAward.bind(this, idx)}>Delete</button>
              </div>
            )
          })}
        </div>
        <div style={styles.stretch}></div>
        <br />

        <Link to='/wizard/education' style={styles.nav}>Back</Link>
        <Link to='/wizard/publications' style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
