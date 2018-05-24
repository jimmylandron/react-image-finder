import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Search from './Search';
import './App.css';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navbar />
                    <Search />
                </div>            
            </MuiThemeProvider>
        )
    }

}

export default App