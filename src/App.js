import React, { Component } from 'react';
import Header from './components/header';
import SideNav from './components/sideNav';

import MyData from './views/myData';
import Home from './views/home';

export default class App extends Component {
  render() {
    var styles = {
      viewport: {
        width: '80vw',
        height: 'calc( 100vh - 63px )',
        overflowY: 'scroll',
        float: 'left',
        boxSizing: 'border-box',
        backgroundColor: '#C2BDBD'
      }
    };

    return (
      <div>
        <Header />
        <SideNav />
        <div style={styles.viewport}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
