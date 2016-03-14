import React, { Component } from 'react';
import { Link } from 'react-router';
import TextInput from '../components/textInput';

export default class WizardBasics extends Component {
  constructor( props ) {
    super(props);

    this.state = {
      basics: {
        name: '',
        label: '',
        picture: '',
        email: '',
        phone: '',
        website: '',
        summary: ''
      },
      allData: {}
    };

    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      if(data.basics) {
        this.state = data.basics;
      }
      this.state.allData = data;
    }

    console.log('State: ', this.state);

    //functions
    this._trySave = this._trySave.bind(this);
  }

  _trySave() {
    var basics = this.state;
    var allData = this.state.allData;
    delete basics.allData;
    delete basics.basics;
    console.log('new basics', basics);
    console.log('allData: ', allData);
    allData.basics = basics;

    console.log('Trying to save', this.state);
    localStorage.setItem('jrmgrstate', JSON.stringify(allData));
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
      }
    };

    return (
      <div>
        <h2>The Basics</h2>
        <hr />
        <form>
          <div style={styles.inputBox}>
            <p style={styles.label}>Name</p>
            <input type='text' placeholder='name' value={this.state.name} onChange={ (event)=> this.setState({name: event.target.value}) } style={styles.input}/>
          </div>

          <div style={styles.inputBox}>
            <p style={styles.label}>Label</p>
            <input type='text' placeholder='label' value={this.state.label} onChange={ (event)=> this.setState({label: event.target.value}) } style={styles.input}/>
          </div>

          <div style={styles.inputBox}>
            <p style={styles.label}>Picture</p>
            <input type='text' placeholder='picture' value={this.state.picture} onChange={ (event)=> this.setState({picture: event.target.value}) } style={styles.input}/>
          </div>

          <div style={styles.inputBox}>
            <p style={styles.label}>Email</p>
            <input type='text' placeholder='email' value={this.state.email} onChange={ (event)=> this.setState({email: event.target.value}) } style={styles.input}/>
          </div>

          <div style={styles.inputBox}>
            <p style={styles.label}>Phone</p>
            <input type='text' placeholder='phone' value={this.state.phone} onChange={ (event)=> this.setState({phone: event.target.value}) } style={styles.input}/>
          </div>

          <div style={styles.inputBox}>
            <p style={styles.label}>Website</p>
            <input type='text' placeholder='website' value={this.state.website} onChange={ (event)=> this.setState({website: event.target.value}) } style={styles.input}/>
          </div>

          <div style={styles.inputBox}>
            <p style={styles.label}>Summary</p>
            <input type='text' placeholder='summary' value={this.state.summary} onChange={ (event)=> this.setState({summary: event.target.value}) } style={styles.input}/>
          </div>
        </form>
        <button onClick={this._trySave}>Save</button>
        <br />
        <br />
        <Link to='/wizard/location' style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
