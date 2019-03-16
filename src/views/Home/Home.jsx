import React, { Component } from 'react';
import { urls } from '../../utils';
import { Boards, Teams } from '../../containers';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, withStyles } from '@material-ui/core';
import { Dashboard as DashboardIcon, Group as GroupIcon } from '@material-ui/icons';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  menu: {
    border: '1px solid red',
    marginRight: theme.spacing.unit * 2
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  listItem: {},
  active: {},
  content: {
    border: '1px solid black',
    width: '70%'
  }
});

const tabParam = 'tab';
const boardsTab = 'boards';
const teamsTab = 'teams';
const createSearchTabPath = tab => `?${tabParam}=${tab}`;
const getTabFromSearch = search => urls.getParamFromSearch(search, tabParam);
const menu = [
  {
    text: 'Boards',
    icon: DashboardIcon,
    path: { search: createSearchTabPath(boardsTab) }
  },
  {
    text: 'Teams',
    icon: GroupIcon,
    path: { search: createSearchTabPath(teamsTab) }
  }
];

function Content({ tab: tabName }) {
  switch (tabName) {
    case boardsTab:
      return <Boards />;
    case teamsTab:
      return <Teams />;
    default:
      return <p>Yo</p>;
  }
}

class Home extends Component {
  render() {
    const { classes, location } = this.props;
    return (
      <div className={classes.root}>
        <section className={classes.menu}>
          <List className={classes.list} component="nav" dense>
            {menu.map(({ path, text, icon: IconComponent }, key) => (
              <ListItem className={classes.listItem} button dense
                        key={key} to={path} component={NavLink} activeClassName={classes.active} color="primary">
                {IconComponent && <ListItemIcon>
                  <IconComponent />
                </ListItemIcon>}
                <ListItemText>
                  {text}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </section>
        <section className={classes.content}>
          <Content tab={getTabFromSearch(location.search)} />
        </section>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
