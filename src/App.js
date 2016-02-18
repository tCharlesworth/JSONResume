import React, { Component } from 'react';
import Header from './components/header';
import SideNav from './components/sideNav';

import MyData from './views/myData';

export default class App extends Component {
  render() {
    var styles = {
      viewport: {
        width: '80vw',
        minHeight: 'calc( 100vh - 60px )',
        overflowY: 'auto',
        float: 'left',
        boxSizing: 'border-box',
        backgroundColor: '#C2BDBD',
        padding: '5px'
      }
    };

    return (
      <div>
        <Header />
        <SideNav />
        <div style={styles.viewport}>
          <MyData />
        </div>
      </div>
    );
  }
}
