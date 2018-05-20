import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './styles.css';

class Header extends Component {
    render(){
        return(
            <div className="header">
                <img className="logo" src="logo1.png" height="100px" />
                <div className="buttons">
                    <Button className="button" color="secondary">
                        Inicio
                        <Icon>home</Icon>
                    </Button>
                    <Button className="button" color="secondary">
                        Carta
                        <Icon>fastfood</Icon>
                    </Button>
                    <Button className="button" color="secondary">
                        Nosotros
                        <Icon>child_care</Icon>
                    </Button>
                    <Button className="button" color="secondary">
                        Encuentranos
                        <Icon>place</Icon>
                    </Button>
                </div>
            </div>
        );
    }
}

export default Header;
