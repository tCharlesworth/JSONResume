import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WizardEducation extends Component {
  constructor( props ) {
    super(props);
    this.state = {
      institution: '',
      area: '',
      studyType: '',
      startDate: '',
      endDate: '',
      gpa: '',
      courses: [],
      allData: {},
      education: []
    };

    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      this.state.allData = data;
      if(data.education) {
        this.state.education = data.education;
      }
    }

    //functions
    this._addCourse = this._addCourse.bind(this);
    this._addEducation = this._addEducation.bind(this);
    this._saveState = this._saveState.bind(this);
    this.deleteEducation = this._deleteEducation.bind(this);
  }

  _addCourse() {
    this.state.courses.push(this.state.course);
    this.setState({course: ''});
  }

  _addEducation() {
    var newEducation = {
      institution: this.state.institution,
      area: this.state.area,
      studyType: this.state.studyType,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      gpa: this.state.gpa,
      courses: this.state.courses
    };
    this.state.education.push(newEducation);
    this._saveState();
  }

  _saveState() {
    this.state.institution = '';
    this.state.area = '';
    this.state.studyType = '';
    this.state.startDate = '';
    this.state.endDate = '';
    this.state.gpa = '';
    this.state.courses = [];
    this.state.course = '';

    var allData = this.state.allData;
    allData.education = this.state.education;
    localStorage.setItem('jrmgrstate', JSON.stringify(allData));
    this.setState({education: allData.education});
  }

  _deleteEducation( idx ) {
    this.state.education.splice(idx, 1);
    this._saveState();
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
        <h3>Education</h3>
        <hr />

        <div style={styles.left}>
          <div style={styles.inputBox}>
            <p style={styles.label}>Institution</p>
            <input type='text' placeholder='institution' value={this.state.institution} onChange={ (event)=> this.setState({institution: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Area</p>
            <input type='text' placeholder='area' value={this.state.area} onChange={ (event)=> this.setState({area: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Study Type</p>
            <input type='text' placeholder='study type' value={this.state.studyType} onChange={ (event)=> this.setState({studyType: event.target.value}) } style={styles.input}/>
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
            <p style={styles.label}>Gpa</p>
            <input type='text' placeholder='gpa' value={this.state.gpa} onChange={ (event)=> this.setState({gpa: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Courses</p>
            <input type='text' placeholder='course' value={this.state.course} onChange={ (event)=> this.setState({course: event.target.value}) } style={styles.input}/>
            <button onClick={this._addCourse}>Add</button>
          </div>
          <ul>
            {this.state.courses.map(( item )=>{
              return (
                <li>{item}</li>
              )
            })}
          </ul>
          <button onClick={this._addEducation}>Save</button>
        </div>

        <div style={styles.right}>
          {this.state.education.map(( item, idx )=>{
            return (
              <div>
                <h4>{item.institution}</h4>
                <ul>
                  <li>{item.area}</li>
                  <li>{item.studyType}</li>
                  <li>{item.startDate}</li>
                  <li>{item.endDate}</li>
                  <li>{item.gpa}</li>
                  <ul>
                    {item.courses.map(( item2 )=>{
                      return (
                        <li>{item2}</li>
                      )
                    })}
                  </ul>
                </ul>
                <button onClick={this._deleteEducation.bind(this, idx)}>Delete</button>
              </div>
            )
          })}
        </div>
        <div style={styles.stretch}></div>
        <br/>

        <Link to='/wizard/volunteer' style={styles.nav}>Back</Link>
        <Link to='/wizard/awards' style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
