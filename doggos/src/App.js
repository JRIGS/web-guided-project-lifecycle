import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogs:[],
        breedType:""
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

    componentDidMount() {
        axios.get(`https://dog.ceo/api/breed/husky/images`)
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
        axios.get(`https://dog.ceo/api/breed/${this.state.breedType}/images`)
            .then(resp=>{
                this.setState({
                    dogs:resp.data.message
                })
            })
            .catch(err=>console.log(err));
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