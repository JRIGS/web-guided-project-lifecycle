import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogs:[],
        breedType:""
    }

    componentDidMount() {
        axios.get(`https://dog.ceo/api/breed/husky/images`)
            .then(resp=>{
                this.setState({
                    dogs:resp.data.message
                });
            })
            .catch(err => console.log(err))
    }
    
    render() {
        return(
            <div className="App">
                <h1>Search Doooogs</h1>
                <form>
                    <input type="text"/>
                    <button>Fetch Dogs</button>
                </form>
                <div className="dogContainer">
                    {
                        this.state.dogs.map(item=>(<img width="200" key={item} src={item} alt={item}/>))
                    }
                </div>
            </div>
        )
    }
}

export default App;