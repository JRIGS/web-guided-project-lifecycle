import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogs:[],
        breedType:""
    }

    componentDidMount() {
        this.fetchDogs("husky");
    }

    fetchDogs = (breed) => {
        axios.get(`https://dog.ceo/api/breed/${breed}/images`)
            .then(resp=>{
                this.setState({
                    dogs:resp.data.message
                });
            })
            .catch(err => console.log(err))
    }
    
    handleChange = (e) => {
        this.setState({ breedType:e.target.value});
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.fetchDogs(this.state.breedType);
        this.setState({ breedType:""});
    }

    render() {
        return(
            <div className="App">
                <h1>Search Doooogs</h1>
                <form onSubmit={this.handleSearch}>
                    <input onChange={this.handleChange} type="text"/>
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