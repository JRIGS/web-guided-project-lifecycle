import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogs:[
            "https://images.dog.ceo/breeds/cattledog-australian/IMG_0206.jpg",
            "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg",
            "https://images.dog.ceo/breeds/cattledog-australian/IMG_1062.jpg"
        ]
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