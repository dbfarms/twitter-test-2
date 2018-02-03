import React, { Component } from 'react';
import SearchForm from './searchform'
import Searches from './searches'
import uuidV4 from 'uuid/v4';

export default class Search extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            searches: [],
        }
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords
            
            
        })
    }

    addSearchTerm = (searchTerm) => {
        this.setState({
            searches: [...this.state.searches, {id: uuidV4(), ...searchTerm}],
        })
    }

    render() {
        return (
            <div>
            <h1>Twitters</h1>
            <div className="locations">
            </div>
            <SearchForm onSubmit={this.addSearchTerm.bind(this)}/>
            <Searches searches={this.state.searches} />
            </div>
        );
    }
}