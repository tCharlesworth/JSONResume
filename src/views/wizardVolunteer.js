import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WizardVolunteer extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      organization: '',
      position: '',
      website: '',
      startDate: '',
      endDate: '',
      summary: '',
      highlight: '',
      highlights: [],
      volunteer: []
    };
    var data = localStorage.getItem('jrmgrstate');
    if(!data) {
      data = {
        volunteer: []
      };
    } else {
      data = JSON.parse(data);
      this.state.allData = data;
      if(data.volunteer) {
        this.state.volunteer = data.volunteer;
      }
    }

    //functions
    this._saveState = this._saveState.bind(this);
    this._addVolunteer = this._addVolunteer.bind(this);
    this._addHighlight = this._addHighlight.bind(this);
    this._deleteVolunteer = this._deleteVolunteer.bind(this);
  }

  _addVolunteer() {
    var newVolunteer = {
      organization: this.state.organization,
      position: this.state.position,
      website: this.state.position,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      summary: this.state.summary,
      highlights: this.state.highlights
    };
    this.state.volunteer.push(newVolunteer);
    this._saveState();
  }

  _deleteVolunteer(idx) {
    this.state.volunteer.splice(idx, 1);
    this._saveState();
  }

  _saveState() {
    var allData = this.state.allData;
    allData.volunteer = this.state.volunteer;

    localStorage.setItem('jrmgrstate', JSON.stringify(allData));
    this.state.organization = '';
    this.state.position = '';
    this.state.website = '';
    this.state.startDate = '';
    this.state.endDate = '';
    this.state.summary = '';
    this.state.highlight = '';
    this.state.highlights = [];
    this.setState({volunteer: allData.volunteer});
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
        <h3>Volunteer</h3>
        <hr />

        <div style={styles.left}>
          <div style={styles.inputBox}>
            <p style={styles.label}>Organization</p>
            <input type='text' placeholder='organization' value={this.state.organization} onChange={ (event)=> this.setState({organization: event.target.value}) } style={styles.input}/>
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
          <button onClick={this._addVolunteer}>Save</button>
        </div>
        <div style={styles.right}>
          {this.state.volunteer.map(( item, idx )=>{
            return (
              <div>
                <h4>{item.organization}</h4>
                <ul>
                  <li>{item.position}</li>
                  <li>{item.website}</li>
                  <li>{item.startDate}</li>
                  <li>{item.endDate}</li>
                  <li>{item.summary}</li>
                  <ul>
                    {item.highlights.map(( item2 )=>{
                      return (
                        <li>{item2}</li>
                      )
                    })}
                  </ul>
                </ul>
                <button onClick={this._deleteVolunteer.bind(this, idx)}>Delete</button>
              </div>
            )
          })}
        </div>
        <div style={styles.stretch}></div>
        <br/>
        <Link to='/wizard/work' style={styles.nav}>Back</Link>
        <Link to='/wizard/education' style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
