import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WizardReferences extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      name: '',
      reference: '',
      allData: {},
      references: []
    };

    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      this.state.allData = data;
      if(data.references) {
        this.state.references = data.references;
      }
    }

    // functions
    this._saveState = this._saveState.bind(this);
    this._addReference = this._addReference.bind(this);
    this._removeReference = this._removeReference.bind(this);
  }

  _removeReference( idx ) {
    this.state.references.splice(idx, 1);
    this._saveState();
  }

  _addReference() {
    var newReference = {
      name: this.state.name,
      reference: this.state.reference
    };
    this.state.references.push(newReference);
    this._saveState();
  }

  _saveState() {
    var allData = this.state.allData;
    allData.references = this.state.references;
    localStorage.setItem('jrmgrstate', JSON.stringify(allData));

    this.state.name = '';
    this.state.reference = '';
    this.setState({references: allData.references});
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
        <h3>References</h3>
        <hr />

        <div style={styles.left}>
          <div style={styles.inputBox}>
            <p style={styles.label}>Name</p>
            <input type='text' placeholder='name' value={this.state.name} onChange={ (event)=> this.setState({name: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Reference</p>
            <input type='text' placeholder='reference' value={this.state.reference} onChange={ (event)=> this.setState({reference: event.target.value}) } style={styles.input}/>
          </div>
          <button onClick={this._addReference}>Add Reference</button>
        </div>
        <div style={styles.right}>
          {this.state.references.map(( item, idx )=>{
            return (
              <div>
                <h4>{item.name}</h4>
                <p>{item.reference}</p>
                <button onClick={this._removeReference}>Delete</button>
              </div>
            )
          })}
        </div>
        <div style={styles.stretch}></div>
        <br />

        <Link to='/wizard/interests' style={styles.nav}>Back</Link>
        <Link to='/wizard/done' style={styles.nav}>Done</Link>
      </div>
    );
  }
}
