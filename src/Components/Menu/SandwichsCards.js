import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './styles.css';

const styles = {
  card: {
    maxWidth: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
};

class SandwichsCards extends Component {
    render(){
        const { classes } = this.props;
        return(
            <table className="SandwichsCards">
                <tr>
                    <td>
                        <Card className={classes.card}>
                            <CardMedia
                              className={classes.media}
                              image="franklin.jpg"
                              title="Barrio Franklin"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                Barrio Franklin
                              </Typography>
                              <Typography component="p">
                                    Exquisito pan ciabatta pincealdo con mantequilla saboriza
                                    de ajo acompañado con carne de punta de ganso marinada al merlot con
                                    especias, pimentón juliana, rúcula y delicioso queseo chanco gratinado
                              </Typography>
                            </CardContent>
                        </Card>
                    </td>
                    <td>
                        <Card className={classes.card}>
                            <CardMedia
                              className={classes.media}
                              image="provi.jpg"
                              title="Provi"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                El Provi
                              </Typography>
                              <Typography component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                              </Typography>
                            </CardContent>
                        </Card>
                    </td>

                    <td>
                        <Card className={classes.card}>
                            <CardMedia
                              className={classes.media}
                              image="./vega.jpg"
                              title="Vega Central (Vegetariano)"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                Vega Central
                              </Typography>
                              <Typography component="p">
                                Delicioso pan ciabatta pincelado con mantequilla saborizada
                                acompañado de championes horneados, zuccini, pimento rojo,
                                rodajas de tomate, rucula y queseo chancho gratinado.
                              </Typography>
                            </CardContent>
                        </Card>
                    </td>
                    <td>
                        <Card className={classes.card}>
                            <CardMedia
                              className={classes.media}
                              image="pac.jpg"
                              title="Pedro Aguirres Cerda"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                Pedro Aguirres Cerda
                              </Typography>
                              <Typography component="p">
                                Sabroso pan ciabatta pincelado con mantequilla saborizada de ajo
                                acompañado con carne de lomo de cerdo marinada con malta y espcias,
                                champiñón horneado, zuccini salteado, rodajas de tomate pera y
                                delicioso queso chancho gratinado.
                              </Typography>
                            </CardContent>
                        </Card>
                    </td>
                </tr>
            </table>
        );
    }
}

SandwichsCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SandwichsCards)
