import React, { Component } from 'react';

export default class MyData extends Component {
  render() {
    var styles = {
      drop: {
        color: 'blue'
      },
      section: {
        backgroundColor: '#6E92B5'
      },
      subSection: {
        backgroundColor: '#6B6A6A',
        margin: '0px'
      },
      value: {
        margin: '0px',
        marginLeft: '10px'
      }
    };

    return (
      <div>

        <div>
          <div style={styles.section}>
            <span style={styles.drop}> >> </span>
            <span>Basics</span>
          </div>
          <div style={styles.subSection}>
            <p style={styles.value}>Name</p>
            <p style={styles.value}>Address</p>
            <p style={styles.value}>Location</p>
          </div>
        </div>
        
        <div>
          <div style={styles.section}>
            <span style={styles.drop}> >> </span>
            <span>Basics</span>
          </div>
          <div style={styles.subSection}>
            <p style={styles.value}>Name</p>
            <p style={styles.value}>Address</p>
            <p style={styles.value}>Location</p>
          </div>
        </div>


      </div>
    );
  }
}
