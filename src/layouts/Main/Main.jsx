import React, { Component } from 'react';
import { AppBar, IconButton, List, Toolbar, withStyles } from '@material-ui/core';
import { Dashboard as DashboardIcon, Home as HomeIcon } from '@material-ui/icons';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { mainRoutes as routes } from '../../routes';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 6
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar className={classes.toolbar} variant='dense'>
            <IconButton color='inherit'>
              <HomeIcon />
            </IconButton>
            <IconButton color='inherit'>
              <DashboardIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <section>
            <List component='nav'>
              <NavLink to='/boards'>
                Boards
              </NavLink>
            </List>
          </section>
          <section>
            <Switch>
              {routes.map((route, key) => (
                route.redirect ?
                  <Redirect to={route.to} /> :
                  <Route key={key} {...route} />
              ))}
            </Switch>
          </section>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Main);
