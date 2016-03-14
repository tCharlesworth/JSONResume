import React, { Component } from 'react';

export default class MyData extends Component {
  constructor( props ) {
    super( props );
    this.state = {};

    var data = localStorage.getItem('jrmgrstate');
    if(data) {
      data = JSON.parse(data);
      //loop through each section
      this.state = {
        data: data
      };
    }
  }

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
        marginLeft: '10px',
        color: '#fff'
      },
      key: {
      }
    };
    return (
      <div>
        {()=>{
          if(this.state.basics) {
            console.log("Show It");
            return (
              <div>
                <p style={styles.section}>Basics</p>
              </div>
            )
          } else {
            console.log("Dont Show It");
            return (
              <div>Nothing</div>
            )
          }
        }}
      </div>
    )
  }
}
