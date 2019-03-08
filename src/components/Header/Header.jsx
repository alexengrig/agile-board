import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <h4>{this.props.children}</h4>
    );
  }
}

export default Header;
