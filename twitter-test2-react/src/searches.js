import React, { Component } from 'react';

export default class Searches extends Component {
    
    handleOnClick = (id, event) => {
        this.props.onEdit(id);
        
    }

    
    render() {
        const { searches } = this.props;
        if (searches.searches.length > 0 ) {
            //debugger
            const searchList = searches.searches.map((search, index) => {
                return (
                    <li key={index}>{search.searchTerm}
                    <button onClick={(event) => this.handleOnClick(search.id, event)}> Edit Search </button>
                    </li>
                )
            });
        // else {
         //   const searchList = "empty array"
        //}
        return (
            <ul>
            {searchList}
            </ul>
        )
        } else {
            return (
                <p>test</p>    
            )
        }
    }
}