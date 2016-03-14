import React, { Component } from 'react';

export default class TextInput extends Component {
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
    };

    return (
      <div style={styles.inputBox}>
        <p style={styles.label}>{this.props.label}</p>
        <input type='text' placeholder={this.props.label} style={styles.input}/>
      </div>
    );
  }
}
