import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidV4 from 'uuid/v4';

import SearchForm from './searchform'
import Searches from './searches'
import { Route, Switch } from 'react-router-dom'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            //id: null,
            //searches: [],
            editing: null,
        }
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords
        })
    }

    /*
    addSearchTerm = (searchTerm) => {
        this.setState({
            searches: [...this.state.searches, {id: uuidV4(), ...searchTerm}],
        })
    }
    was passing this in before but not with redux 
    */ 
    
    editSearchTerm = (id) => {
        this.setState({
            editing: id, 
        })
    }
    
    findSearchTerm = (id) => {
        if (id === null) {
            return {};
        } else {
            return this.props.searches.find((el) => el.id === id);
        }
    }

    render() {
        
        const MySearchForm = (props) => {
            return (
                <SearchForm 
                    onSubmit={this.addSearchTerm.bind(this)}
                    {...props}
                />
            )
        }
    
        const MySearches = (props) => {
            //debugger 
            return (
                <Searches 
                    searches={this.state.searches}
                    {...props}
                />
            )
        }
        
        //debugger 
        return (
            <div>
            <h1>Twitters</h1>
            <SearchForm 
                //onSubmit={this.addSearchTerm.bind(this)}  // no longer needed with redux
                editing={this.state.editing}
                search={this.findSearchTerm(this.state.editing)}
            />
            <Searches 
                searches={this.props.searches}
                onEdit={this.editSearchTerm.bind(this)} />
           </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { searches: state.searches }; 
    // not sure about the above line ... state.what???? 
}

export default connect(mapStateToProps, null)(Search);

/*
            <Switch>
                <Route 
                    path="/searches/new" 
                    render={MySearchForm} />
                <Route 
                    path="/searches"
                    render={MySearches} />
            </Switch>

*/