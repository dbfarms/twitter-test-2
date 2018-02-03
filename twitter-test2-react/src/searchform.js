import React, { Component } from 'react';


export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchTerm: "",
        }
    }
       
    handleChange = (event) => {
        //const {searchTerm, value } = event.target 
        this.setState({
            searchTerm: event.target.value  
        })
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        //debugger
        this.setState({
            searchTerm: '',
        });
    }
       
    render() {
        return (
            <div>
                <h2>Search Terms Form</h2>
            <form onSubmit={(event) => this.handleOnSubmit(event)} >
                <label htmlFor="searchTerm">Search Term</label>
                <input type="text" 
                    name="searchTerm" 
                    value={this.state.searchTerm}
                    onChange={(event) => this.handleChange(event)}/>
                <br />
                <input type="submit" />
            </form>
            </div>
        );
    }
}