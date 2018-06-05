import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        width: 300,
        height: 390,
    },
    media: {
        height: 0,
        paddingTop: '65%',
    },
    paper: {
        textAlign: 'center'
    }
};

class SandwichsCards extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>

            </div>
        );
    }
}

export default withStyles(styles)(SandwichsCards)
