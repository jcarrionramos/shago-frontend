import React, { Component } from 'react';
import Header from './Components/Header/';
import Banner from './Components/Banner/';
import Menu from './Components/Menu/';
import Us from './Components/Us/';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fffb67',
      main: '#fac832',
      dark: '#c39800',
      contrastText: '#000000',
    },
    secondary: {
      light: '#3e4346',
      main: '#181c1f',
      dark: '#000000',
      contrastText: '#ffffff',
    },
  },
});

class App extends Component {
    render(){
        return(
            <MuiThemeProvider theme={theme}>
                <div>
                    <Header/>
                    <Banner/>
                    <Menu />
                    <Us />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
