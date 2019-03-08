import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    const { width, height, margin = 4, padding = 4 } = this.props;
    const mainStyle = {
      display: 'list-item',
      margin,
      padding,
      width,
      height
    };

    return (
      <li style={mainStyle}>
        {this.props.children}
      </li>
    );
  }
}

export default ListItem;
