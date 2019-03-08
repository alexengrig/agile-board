import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '..';
import { urls } from '../../utils';

class BoardItem extends Component {
  render() {
    const { id, name = '*noname', color = 'gray' } = this.props;
    const style = {
      display: 'inline-block',
      height: '100%',
      width: '100%',
      padding: '4px',
      backgroundColor: color,
      borderRadius: '3px',
      color: 'white',
      textDecoration: 'none'
    };

    return (
      <ListItem width="150px" height="80px">
        <Link to={urls.getBoardUrlById(id)} style={style}>
          {name}
        </Link>
      </ListItem>
    );
  }
}

export default BoardItem;
