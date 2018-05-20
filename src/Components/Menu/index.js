import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SandwichsCards from'./SandwichsCards.js';
import AppetizerCards from'./AppetizerCards.js';
import './styles.css';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class Menu extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render(){
        const { classes } = this.props;
        return(
            <div className='wrap'>
                <h1 className='huno'> Carta </h1>
                <div className='menu' style={{ backgroundImage: 'url(team2.png)' }}>
                    <Paper className={classes.root}>
                        <Tabs
                          value={this.state.value}
                          onChange={this.handleChange}
                          indicatorColor="primary"
                          textColor="secondary"
                          centered
                        >
                          <Tab label="Sándwichs" />
                          <Tab label="Appetizer" />
                          <Tab label="Bebestibles" />
                        </Tabs>
                    </Paper>
                    {this.state.value === 0 && <SandwichsCards/>}
                    {this.state.value === 1 && <AppetizerCards/>}
                </div>
                <br/>
            </div>
        );
    }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);