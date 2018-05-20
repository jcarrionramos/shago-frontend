import React, {Component} from 'react';
import './styles.css';

class Banner extends Component {
    render(){
        return(
            <div className="bg-banner" style={{ backgroundImage: 'url(background-banner-1.png)' }}>
                <div className="container">
                  <h1 className="title-banner"><b></b><br /></h1>
                </div>
            </div>
        );
    }
}

export default Banner;
