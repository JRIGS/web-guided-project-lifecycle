import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogs:[]
    }
    
    render() {
        return(
            <div className="App">
                <h1>Search Doooogs</h1>
                <div className="dogContainer">

                </div>
            </div>
        )
    }
}