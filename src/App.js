import React, { Component } from 'react';
import Header from './Components/Header/';
import Banner from './Components/Banner/';


class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Banner/>
                <h1> Hello World! </h1>
            </div>
        );
    }
}

export default App;
