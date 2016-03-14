import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WizardProfiles extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      profiles: [
        {
          network: 'hi',
          username: 'hi',
          url: 'hi'
        }
      ]
    };

    //Check for save data
    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
    } else {
      data = {
        profiles: []
      };
    }
    if(data.profiles) {
      this.state.profiles = data.profiles;
    } else {
      this.state.profiles = [];
    }
    this.state.allData = data;

    //Functions
    this._addProfile = this._addProfile.bind(this);
    this._saveState = this._saveState.bind(this);
    this._delete = this._delete.bind(this);
  }

  _addProfile() {
    if(this.state.network && this.state.username && this.state.url) {
      var newProfile = {
        network: this.state.network,
        username: this.state.username,
        url: this.state.url
      }
      this.state.network = '';
      this.state.username = '';
      this.state.url = '';

      this.state.profiles.push(newProfile);
      console.log('profile added');
      // Save stuff
      this._saveState();

    } else {
      console.log('somethings missing');

    }
  }

  _saveState() {
    // Save stuff
    var allData = this.state.allData;
    allData.profiles = this.state.profiles;
    localStorage.setItem('jrmgrstate', JSON.stringify(allData));
    console.log('profiles saved');
    this.setState({profiles: allData.profiles});
  }

  _delete(idx) {
    this.state.profiles.splice(idx, 1);
    this.setState({profiles: this.state.profiles});
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
      },
      ul: {
        listStyleType: 'none',
        margin: '0px',
        paddingLeft: '20px'
      },
      netTitle: {
        marginBottom: '0px'
      }
    };

    return (
      <div>
        <h3>Profiles</h3>
        <hr />
        <div style={styles.left}>
          <div style={styles.inputBox}>
            <p style={styles.label}>Network</p>
            <input type='text' placeholder='network' value={this.state.network} onChange={ (event)=> this.setState({network: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Username</p>
            <input type='text' placeholder='username' value={this.state.username} onChange={ (event)=> this.setState({username: event.target.value}) } style={styles.input}/>
          </div>
          <div style={styles.inputBox}>
            <p style={styles.label}>Url</p>
            <input type='text' placeholder='url' value={this.state.url} onChange={ (event)=> this.setState({url: event.target.value}) } style={styles.input}/>
          </div>
          <br/><br/>
          <button onClick={ this._addProfile }>Save</button>
        </div>
        <div style={styles.right}>
          {this.state.profiles.map((item, idx)=>{
            return(
              <div>
                <h4 style={styles.netTitle}>{item.network}</h4>
                <ul style={styles.ul}>
                  <li>{item.username}</li>
                  <li>{item.url}</li>
                </ul>
                <button onClick={this._delete.bind(this, idx)}>Delete</button>
              </div>
            );
        })}
        </div>
        <div style={styles.stretch}></div>
        <br/>
        <Link to='/wizard/location' style={styles.nav}>Back</Link>
        <Link to='/wizard/work' style={styles.nav}>Next</Link>
        <p></p>
      </div>
    );
  }
}
