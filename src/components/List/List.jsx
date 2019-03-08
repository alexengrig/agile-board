import React, { Component } from 'react';

class List extends Component {
  render() {
    const style = {
      display: 'flex',
      listStyle: 'none',
      flexWrap: 'wrap',
      margin: 0,
      padding: 0
    };

    return (
      <ul style={style}>
        {this.props.children}
      </ul>
    );
  }
}

export default List;
