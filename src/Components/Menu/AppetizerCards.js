import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
};

class AppetizerCards extends Component {
    render(){
        const { classes } = this.props;
        return(
            <table className="AppetizerCards">
                <tr>
                    <td>
                        <Card className={classes.card}>
                            <CardMedia
                              className={classes.media}
                              image="./alitas.jpg"
                              title="Alitas de Pollo"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                Alitas de Pollo
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
                              image="./papas.jpg"
                              title="Papas Rusticas"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                Papas Rusticas
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
                              image="./baston.jpg"
                              title="Mozzarella Sticks"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h2">
                                Mozzarella Sticks
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

AppetizerCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppetizerCards)
