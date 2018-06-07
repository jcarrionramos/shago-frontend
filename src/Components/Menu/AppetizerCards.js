import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './styles.css'

const styles = {
    card: {
        width: 300,
        height: 300,
    },
    media: {
        height: 0,
        paddingTop: '65%', // 16:9
    }
};

class AppetizerCards extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div className="AppetizerCards">
              <Grid container justify="center" spacing={40} >
                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                          className={classes.media}
                          image="./alitas.jpg"
                          title="Alitas de Pollo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="title" component="h2" align="center">
                            Filetitos de Pollo
                          </Typography>
                          <Typography component="p" align="justify">
                            acompañado de salsa pébre.
                          </Typography>
                          <Typography gutterBottom variant="subheading" align="right">
                            $2.500
                          </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                          className={classes.media}
                          image="./papas.jpg"
                          title="Papas Rusticas"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="title" component="h2" align="center">
                            Papas Ruisticas
                          </Typography>
                          <Typography component="p" align="justify">
                            Acompañado de salsa pébre.
                          </Typography>
                          <Typography gutterBottom variant="subheading" align="right">
                            $2.500
                          </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                          className={classes.media}
                          image="./baston.jpg"
                          title="Mozzarella Sticks"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="title" component="h2" align="center">
                            Bastones de Mozzarella
                          </Typography>
                          <Typography component="p" align="justify">
                            Acompañado de salsa pébre.
                          </Typography>
                          <Typography gutterBottom variant="subheading" align="right">
                            $2.500
                          </Typography>
                        </CardContent>
                    </Card>
                </Grid>
              </Grid>
            </div>
        );
    }
}

AppetizerCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppetizerCards)
