import uuidV4 from 'uuid/v4';

export default function SearchReducer( state = {
    searches: [],
    editing: null,
}, action) {
    switch(action.type) {
        case "CREATE_SEARCH":
            const search = { ...action.payload, id: uuidV4()};
            //debugger 
            return {...state, searches: [...state.searches, search]}
            //return {
            //    ...state, 
            //    searches: {...state.searches, [search.id]: search}
            //};
    
        case "SELECT_SCHOOL_TO_EDIT":
            //return Object.assign({}, state, { editing: action.payload});
            return {...state, editing: action.payload};
            
        case "UPDATE_SEARCH":
            const index = state.searches.indexOf(action.payload)
                        
        default: 
            return state 
    }
}