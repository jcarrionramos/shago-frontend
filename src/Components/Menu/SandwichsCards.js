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
    maxWidth: 400,
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
                              image="/static/images/cards/contemplative-reptile.jpg"
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
                </tr>
                <br />
                <tr>
                    <td>
                        <Card className={classes.card}>
                            <CardMedia
                              className={classes.media}
                              image="./vegacentral.jpg"
                              title="Vega Central (Vegetariano)"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                Vega Central
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
                              image="/static/images/cards/contemplative-reptile.jpg"
                              title="Pedro Aguirres Cerda"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                Pedro Aguirres Cerda
                              </Typography>
                              <Typography component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
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
