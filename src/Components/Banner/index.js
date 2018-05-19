import React, {Component} from 'react';
import './styles.css';

class Banner extends Component {
    render(){
        return(
            <div>
                <div className="bg-banner" style={{ backgroundImage: 'url(background-banner-1.png)' }}>
                    <div className="container">
                      <h1 className="title-banner"><b>Sándwichs</b><br />La nueva propuesta gastronóamica y cultural</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
