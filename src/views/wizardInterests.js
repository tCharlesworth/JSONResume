import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WizardInterests extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      name: '',
      keyword: '',
      allData: {},
      keywords: [],
      interests: []
    };

    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      this.state.allData = data;
      if(data.interests) {
        this.state.interests = data.interests;
      }
    }

    // functions
    this._saveState = this._saveState.bind(this);
    this._addKeyword = this._addKeyword.bind(this);
    this._saveInterest = this._saveInterest.bind(this);
    this._removeInterest = this._removeInterest.bind(this);
  }

  _removeInterest( idx ) {
    this.state.interests.splice(idx, 1);
    this._saveState();
  }

  _saveInterest() {
    var newInterest = {
      name: this.state.name,
      keywords: this.state.keywords
    };
    this.state.interests.push(newInterest);
    this._saveState();
  }

  _addKeyword() {
    this.state.keywords.push(this.state.keyword);
    this.setState({keyword: ''});
  }

  _saveState() {
    var allData = this.state.allData;
    allData.interests = this.state.interests;
    localStorage.setItem('jrmgrstate', JSON.stringify(allData));

    this.state.name = '';
    this.state.keyword = '';
    this.state.keywords = [];
    this.setState({interests: allData.interests});
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
        <h3>Interests</h3>
        <hr />

        <div style={styles.left}>
          <div style={styles.inputBox}>
            <p style={styles.label}>Name</p>
            <input type='text' placeholder='name' value={this.state.name} onChange={ (event)=> this.setState({name: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Keywords</p>
            <input type='text' placeholder='keyword' value={this.state.keyword} onChange={ (event)=> this.setState({keyword: event.target.value}) } style={styles.input}/>
            <button onClick={this._addKeyword}>Add</button>
          </div>
          <ul>
            {this.state.keywords.map(( item )=>{
              return (
                <li>{item}</li>
              )
            })}
          </ul>
          <button onClick={this._saveInterest}>Save Interest</button>
        </div>
        <div style={styles.right}>
          {this.state.interests.map(( item, idx )=>{
            return (
              <div>
                <h4>{item.name}</h4>
                <ul>
                  {item.keywords.map(( item2 )=>{
                    return (
                      <li>{item2}</li>
                    )
                  })}
                </ul>
                <button onClick={this._removeInterest.bind(this, idx)}>Delete</button>
              </div>
            )
          })}
        </div>
        <div style={styles.stretch}></div>
        <br />

        <Link to='/wizard/languages' style={styles.nav}>Back</Link>
        <Link to='/wizard/references' style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
