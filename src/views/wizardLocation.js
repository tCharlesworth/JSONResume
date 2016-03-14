import React, { Component } from 'react';
import { Link } from 'react-router';
import TextInput from '../components/textInput';

export default class WizardLocation extends Component {
  constructor( props ) {
    super(props);
    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      if(!data.location) {
        console.log('location not found');
        data.location = {
              address: '',
              postalCode: '',
              city: '',
              countryCode: '',
              region: ''
            }
      }
      this.state = data.location;
      this.state.allData = data;

    } else {
      this.state = {
        location: {
          address: '',
          postalCode: '',
          city: '',
          countryCode: '',
          region: ''
        }
      };
    }

    console.log('State: ', this.state);

    //functions
    this._trySave = this._trySave.bind(this);
  }

  _trySave() {
    var location = this.state;
    var allData = this.state.allData;
    delete location.allData;
    console.log('new location', location);
    allData.location = location;

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
        <h3>Location</h3>
        <hr />

        <form>
          <div style={styles.inputBox}>
            <p style={styles.label}>Address</p>
            <input type='text' placeholder='address' value={this.state.address} onChange={ (event)=> this.setState({address: event.target.value}) } style={styles.input}/>
          </div>

          <div style={styles.inputBox}>
            <p style={styles.label}>Postal Code</p>
            <input type='text' placeholder='postal code' value={this.state.postalCode} onChange={ (event)=> this.setState({postalCode: event.target.value}) } style={styles.input}/>
          </div>

          <div style={styles.inputBox}>
            <p style={styles.label}>City</p>
            <input type='text' placeholder='city' value={this.state.city} onChange={ (event)=> this.setState({city: event.target.value}) } style={styles.input}/>
          </div>

          <div style={styles.inputBox}>
            <p style={styles.label}>Country Code</p>
            <input type='text' placeholder='country code' value={this.state.countryCode} onChange={ (event)=> this.setState({countryCode: event.target.value}) } style={styles.input}/>
          </div>

          <div style={styles.inputBox}>
            <p style={styles.label}>Region</p>
            <input type='text' placeholder='region' value={this.state.region} onChange={ (event)=> this.setState({region: event.target.value}) } style={styles.input}/>
          </div>
        </form>

        <button onClick={this._trySave}>Save</button><br /><br />
        <Link to='/wizard/basics' style={styles.nav}>Back</Link>
        <Link to='/wizard/profiles' style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
