import React, { Component } from 'react';

export default class SideNav extends Component {
  render() {
    var styles = {
      sideNav: {
        width: '20vw',
        height: 'calc( 100vh - 60px )',
        float: 'left',
        backgroundColor: '#333333',
        borderRight: '3px solid #6B6A6A',
        color: '#9D9C9C',
        display: 'inline-block',
        boxSizing: 'border-box'
      },
      ul: {
        listStyle: 'none',
        padding: '0px 5px'
      },
      li: {
        width: '100%',
        fontSize: '1.5em',
        textTransform: 'uppercase',
        textAlign: 'center'
      },
      hr: {
        border: 'none',
        height: '2px',
        width: '80%',
        backgroundColor: '#6B6A6A'
      }
    }
    return (
      <div style={styles.sideNav}>
        <ul style={styles.ul}>
          <li style={styles.li}>Home</li>
          <hr style={styles.hr} />npm
          <li style={styles.li}>My Data</li>
          <hr style={styles.hr} />
          <li style={styles.li}>Assemble</li>
          <hr style={styles.hr} />
          <li style={styles.li}>Wizard</li>
          <hr style={styles.hr} />
          <li style={styles.li}>Past Resumes</li>
        </ul>
      </div>
    );
  }
}
