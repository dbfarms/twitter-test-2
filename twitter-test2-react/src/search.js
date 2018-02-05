import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bind } from 'redux';
import uuidV4 from 'uuid/v4';
import { bindActionCreators } from 'redux';

import * as actions from './Actions/SearchActions';
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
    
    
    editSearchTerm = (id) => {
        this.setState({
            editing: id, 
        })
    }
    */
    
    findSearchTerm = (id) => {
        if (id === null) {
            return {};
        } else {
            //debugger
            return this.props.searches.searches.find((el) => el.id === id);
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
        
        const { searches, editing, actions } = this.props; // we've moved from state to props with addition of redux
        
        //debugger 
        return (
            <div>
            <h1>Twitters</h1>
            <SearchForm 
                //onSubmit={this.addSearchTerm.bind(this)}  // no longer needed with redux
                editing={editing}
                search={this.findSearchTerm(editing)} //removed this.state because redux is props (see above)
            />
            <Searches 
                searches={searches}
                onEdit={actions.selectSearchToEdit} />
           </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        searches: state.searches, 
        editing: state.searches.editing,
    }; 
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

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