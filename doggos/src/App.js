import React from 'react';
import axios from 'axios';


export default class App extends React.Component {
    state = {
        dogs: [],
        breedType: ''
    }

    fetchDogs = (breed) => {
        axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => {
            console.log(res);
            this.setState({dogs: res.data.message})
        })
        .catch(err => console.log(err));
    }
    
    componentDidMount(){
        this.fetchDogs("husky")
        // axios.get(`https://dog.ceo/api/breed/beagle/images`)
        // .then(res => {
        //     console.log(res);
        //     this.setState({dogs: res.data.message})
        // })
        // .catch(err => console.log(err));

    }
    
    handleChange = (event) => {
        this.setState({breedType: event.target.value})
    }
    
    handleSearch = (event) => {
        event.preventDefault();
        this.fetchDogs(this.state.breedType)
        // axios.get(`https://dog.ceo/api/breed/${this.state.breedType}/images`)
        // .then(res => {
        //     console.log(res);
        //     this.setState({dogs: res.data.message})
        // })
        // .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <h1>Search Dogs</h1>

                <form onSubmit={this.handleSearch}>
                <input type='text' placeholder="Search Breed..." onChange={this.handleChange}></input>
                <button>Search</button>
                </form>

                <div className="dogContainer">
                    {
                        this.state.dogs.map(item => {
                            return(<img width='200' key={item} src={item} alt={item}/>)
                        })
                    }
                </div>
            </div>
        )
    }
}
