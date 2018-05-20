import React, { Component } from 'react';
import Header from './Components/Header/';
import Banner from './Components/Banner/';
import Menu from './Components/Menu/';

class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Banner/>
                <Menu />
            </div>
        );
    }
}

export default App;
