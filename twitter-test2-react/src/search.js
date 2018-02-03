import React, { Component } from 'react';
import SearchForm from './searchform'

export default class Search extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            searches: [],
        }
    }

    addSearchTerm = (searchTerm) => {
        this.setState({
            searches: [this.state.searches, ...searchTerm],
        })
    }

    render() {
        return (
            <div>
            <h1>Twitters</h1>
            <SearchForm onSubmit={this.addSearchTerm}/>
            </div>
        );
    }
}