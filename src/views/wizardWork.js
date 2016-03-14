import React, { Component } from 'react';
import { Link } from 'react-router';
import TextInput from '../components/textInput';

export default class WizardWork extends Component {
  constructor( props ) {
    super(props);
    this.state = {
        work: [],
        company: '',
        position: '',
        website: '',
        startDate: '',
        endDate: '',
        summary: '',
        highlight: '',
        highlights: []
      };
    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      if(data.work) {
        this.state.work = data.work;
      } else {
        this.state.work = [];
      }
      this.state.allData = data;
    }


    //Functions
    this._addWork = this._addWork.bind(this);
    this._saveState = this._saveState.bind(this);
    this._deleteWork = this._deleteWork.bind(this);
    this._addHighlight = this._addHighlight.bind(this);
  }

  _addWork() {
    var newWork = {
      company: this.state.company,
      position: this.state.position,
      website: this.state.website,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      summary: this.state.summary,
      highlights: this.state.highlights
    };
    this.state.work.push(newWork);
    this.state.company = '';
    this.state.position = '';
    this.state.website = '';
    this.state.startDate = '';
    this.state.endDate = '';
    this.state.summary = '';
    this.state.highlights = [];
    this._saveState();
  }

  _saveState() {
    var allData = this.state.allData;
    allData.work = this.state.work;
    localStorage.setItem('jrmgrstate', JSON.stringify(allData));
    this.setState({work: this.state.work});
    console.log('State Saved');
  }

  _deleteWork(idx) {
    this.state.work.splice(idx, 1);
    this._saveState();
  }

  _addHighlight() {
    this.state.highlights.push(this.state.highlight);
    this.setState({highlight: '', highlights: this.state.highlights});
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
        <h3>Work</h3>
        <hr />

        <div style={styles.left}>
          <div style={styles.inputBox}>
            <p style={styles.label}>Company</p>
            <input type='text' placeholder='company' value={this.state.company} onChange={ (event)=> this.setState({company: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Position</p>
            <input type='text' placeholder='position' value={this.state.position} onChange={ (event)=> this.setState({position: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Website</p>
            <input type='text' placeholder='website' value={this.state.website} onChange={ (event)=> this.setState({website: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Start Date</p>
            <input type='text' placeholder='start date' value={this.state.startDate} onChange={ (event)=> this.setState({startDate: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>End Date</p>
            <input type='text' placeholder='end date' value={this.state.endDate} onChange={ (event)=> this.setState({endDate: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Summary</p>
            <input type='text' placeholder='summary' value={this.state.summary} onChange={ (event)=> this.setState({summary: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Highlights</p>
            <input type='text' placeholder='highlights' value={this.state.highlight} onChange={ (event)=> this.setState({highlight: event.target.value}) } style={styles.input}/>
            <button onClick={ this._addHighlight }>Add</button>
            <ul>
              {this.state.highlights.map(( item, idx )=>{
                return (
                  <li>{item}</li>
                )
              })}
            </ul>
          </div>
          <button onClick={this._addWork}>Save</button>
        </div>
        <div style={styles.right}>
          {this.state.work.map((item, idx) => {
            return (
              <div>
                <h4>{item.company}</h4>
                <ul>
                  <li>{item.position}</li>
                  <li>{item.website}</li>
                  <li>{item.startDate}</li>
                  <li>{item.endDate}</li>
                  <li>{item.summary}</li>
                  <li>
                    <ul>
                      {item.highlights.map(( item )=>{
                        return (
                          <li>{item}</li>
                        )
                      })}
                    </ul>
                  </li>
                </ul>
                <button onClick={ this._deleteWork.bind(this, idx) }>Delete</button>
              </div>
            )
          })}
        </div>
        <p style={styles.stretch}></p>
        <br/>
        <Link to='/wizard/profiles' style={styles.nav}>Back</Link>
        <Link to='/wizard/volunteer' style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
