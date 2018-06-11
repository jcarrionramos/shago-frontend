import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './styles.css';

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
            <div className="SandwichsCards">
              <Grid container justify="center" spacing={8}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                          className={classes.media}
                          image="franklin.jpg"
                          title="Barrio Franklin"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="title" component="h2" align="center">
                            Barrio Franklin
                          </Typography>
                          <Typography aling="4" component="p" align="justify">
                                Exquisito pan ciabatta pincelado con mantequilla saborizada
                                de ajo acompañado con carne de punta de ganso marinada al merlot con
                                especias, pimentón juliana, rúcula y queso chanco gratinado
                          </Typography>
                          <Typography gutterBottom variant="subheading" align="right">
                            $5.000
                          </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item >
                    <Card className={classes.card}>
                        <CardMedia
                          className={classes.media}
                          image="provi.jpg"
                          title="Provi"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="title" component="h2" align="center">
                            El Provi
                          </Typography>
                          <Typography component="p" align="justify" >
                            Delicioso pan ciabatta pincelado con mantequilla saborizada acompañado
                            con carne de lomo de cerdo marinado con malta y especias, rodaje de tomates
                            y palta.
                          </Typography>
                          <Typography gutterBottom variant="subheading" align="right">
                            $3.500
                          </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item >
                    <Card className={classes.card}>
                        <CardMedia
                          className={classes.media}
                          image="./vega.jpg"
                          title="Vega Central (Vegetariano)"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="title" component="h2" align="center">
                            Vega Central
                          </Typography>
                          <Typography component="p" align="justify">
                            Delicioso pan ciabatta pincelado con mantequilla saborizada
                            acompañado de championes horneados, zuccini, pimento rojo,
                            rodajas de tomate, rucula y queseo chancho gratinado.
                          </Typography>
                          <Typography gutterBottom variant="subheading" align="right">
                            $4.500
                          </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                          className={classes.media}
                          image="pac.jpg"
                          title="Pedro Aguirre Cerda"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="title" component="h2" align="center">
                            Pedro Aguirre Cerda
                          </Typography>
                          <Typography component="p" align="justify">
                            Pan ciabatta pincelado con mantequilla saborizada de ajo
                            acompañado con carne de lomo de cerdo marinada con malta y especias,
                            champiñón horneado, zuccini salteado, rodajas de tomate pera y queso chancho gratinado.
                          </Typography>
                          <Typography gutterBottom variant="subheading" align="right">
                            $5.000
                          </Typography>
                        </CardContent>
                    </Card>
                </Grid>
              </Grid>
            </div>
        );
    }
}

SandwichsCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SandwichsCards)
