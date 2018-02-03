import React, { Component } from 'react';

export default class Searches extends Component {
    
    handleOnClick = (id, event) => {
        this.props.onEdit(id);
        
    }

    
    render() {
        const { searches } = this.props;
        //debugger 
        const searchList = searches.map((search, index) => {
            return (
                <li key={index}>{search.searchTerm}
                <button onClick={(event) => this.handleOnClick(search.id, event)}> Edit Search </button>
                </li>
            )
        });
        
        return (
            <ul>
            {searchList}
            </ul>
        )
    }
}