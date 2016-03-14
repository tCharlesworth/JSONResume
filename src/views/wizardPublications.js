import React, { Component } from 'react';
import { Link } from 'react-router';
import TextInput from '../components/textInput';

export default class WizardPublications extends Component {
  constructor( props ) {
    super(props);

    this.state = {
      name: '',
      publisher: '',
      releaseDate: '',
      website: '',
      summary: '',
      allData: {},
      publications: []
    };

    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      this.state.allData = data;
      console.log('AllData:', data);
      if(data.publications) {
        this.state.publications = data.publications;
      }
    }

    //functions
    this._addPublication = this._addPublication.bind(this);
    this._removePublication = this._removePublication.bind(this);
    this._saveState = this._saveState.bind(this);
  }

  _addPublication() {
    var newPublication = {
      name: this.state.name,
      publisher: this.state.publisher,
      releaseDate: this.state.releaseDate,
      website: this.state.website,
      summary: this.state.summary
    };
    this.state.publications.push(newPublication);
    this._saveState();
  }

  _removePublication( idx ) {
    this.state.publications.splice(idx, 1);
    this._saveState();
  }

  _saveState() {
    var allData = this.state.allData;
    allData.publications = this.state.publications;
    localStorage.setItem('jrmgrstate', JSON.stringify(allData));

    this.state.name = '';
    this.state.publisher = '';
    this.state.releaseDate = '';
    this.state.website = '';
    this.state.summary = '';
    this.setState({publications: allData.publications});
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
        <h3>Publications</h3>
        <hr />

        <div style={styles.left}>
          <div style={styles.inputBox}>
            <p style={styles.label}>Name</p>
            <input type='text' placeholder='name' value={this.state.name} onChange={ (event)=> this.setState({name: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Publisher</p>
            <input type='text' placeholder='publisher' value={this.state.publisher} onChange={ (event)=> this.setState({publisher: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Release Date</p>
            <input type='text' placeholder='release date' value={this.state.releaseDate} onChange={ (event)=> this.setState({releaseDate: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Website</p>
            <input type='text' placeholder='website' value={this.state.website} onChange={ (event)=> this.setState({website: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Summary</p>
            <input type='text' placeholder='summary' value={this.state.summary} onChange={ (event)=> this.setState({summary: event.target.value}) } style={styles.input}/>
          </div>
          <button onClick={this._addPublication}>Add Publication</button>
        </div>
        <div style={styles.right}>
          {this.state.publications.map(( item, idx )=>{
            return (
              <div>
                <h4>Name: {item.name}</h4>
                <ul>
                  <li>{item.publisher}</li>
                  <li>{item.releaseDate}</li>
                  <li>{item.website}</li>
                  <li>{item.summary}</li>
                </ul>
                <button onClick={this._removePublication.bind(this, idx)}>Delete</button>
              </div>
            )
          })}
        </div>
        <div style={styles.stretch}></div>
        <br />

        <Link to='/wizard/awards'style={styles.nav}>Back</Link>
        <Link to='/wizard/skills'style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
