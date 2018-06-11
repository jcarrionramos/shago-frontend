import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

import './styles.css';

const styles = {
    list: {
        width: 200,
    }
};

class Header extends Component {
    state = {
        show: false,
    };

    toggleDrawer = (open)=> () => {
        this.setState({
            show: open
        })
    };

    render(){
        const { classes } = this.props;

        const Buttons = (
            <div>
                <Hidden mdDown>
                    <Button href="#" color="secondary" onClick={this.toggleDrawer(false)}>
                        Inicio
                        <Icon>home</Icon>
                    </Button>
                    <Button href="#Menu" color="secondary" onClick={this.toggleDrawer(false)}>
                        Carta
                        <Icon>fastfood</Icon>
                    </Button>
                    <Button href="#Us" color="secondary" onClick={this.toggleDrawer(false)}>
                        Nosotros
                        <Icon>child_care</Icon>
                    </Button>
                    <Button color="secondary" onClick={this.toggleDrawer(false)}>
                        Encuentranos
                        <Icon>place</Icon>
                    </Button>
                </Hidden>
                <Hidden lgUp>
                    <Button style={{marginLeft:"80%", position:"sticky"}} fullWidth color="secondary" onClick={this.toggleDrawer(true)}>
                        <Icon>dehaze</Icon>
                    </Button>
                </Hidden>
            </div>
        );

        const sideList = (
              <div className={classes.list}>
                  <hr/>
                  <Button href="#" fullWidth color="secondary" onClick={this.toggleDrawer(false)}>
                      Inicio
                      <Icon>home</Icon>
                  </Button>
                  <hr/>
                  <Button href="#Menu" fullWidth color="secondary" onClick={this.toggleDrawer(false)}>
                      Carta
                      <Icon>fastfood</Icon>
                  </Button>
                  <hr/>
                  <Button href="#Us" fullWidth color="secondary" onClick={this.toggleDrawer(false)}>
                      Nosotros
                      <Icon>child_care</Icon>
                  </Button>
                  <hr/>
                  <Button color="secondary" fullWidth onClick={this.toggleDrawer(false)}>
                      Encuentranos
                      <Icon>place</Icon>
                  </Button>
                  <hr/>
              </div>
        );

        return(
            <div className="header">
                <img className="logo" alt="logo" src="logo1.png" height="100px" />
                <div className="buttons"> {Buttons} </div>
                <SwipeableDrawer
                  style={{zIndex: 1001}}
                  anchor="right"
                  open={this.state.show}
                  onClose={this.toggleDrawer(false)}
                  onOpen={this.toggleDrawer(true)}
                >
                    <div className="buttonsResponsive" role="button">
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
