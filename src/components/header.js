import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    var styles = {
      header: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#6B6A6A',
        borderBottom: '3px solid #6B6A6A',
        color: '#000'
      },
      title: {
        display: 'inline-block',
        margin: '0px',
        marginLeft: '20px'
      },
      ul: {
        display: 'inline-block',
        float: 'right',
        marginRight: '30px'
      },
      li: {
        display: 'inline-block',
        marginRight: '10px'
      }
    }

    return (
      <header style={styles.header}>
        <h1 style={styles.title}>JSON Resume Manager</h1>
        <ul style={styles.ul}>
          <li style={styles.li}>Login</li>
        </ul>
      </header>
    );
  }
}
