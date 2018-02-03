import React, { Component } from 'react';

export default class Searches extends Component {
    render() {
        const { searches } = this.props;
        const searchList = searches.map((search, index) => {
            return (
                <li key={index}>{search.searchTerm}</li>
            )
        });
        
        return (
            <ul>
            {searchList}
            </ul>
        )
    }
}