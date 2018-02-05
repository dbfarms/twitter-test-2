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
        default: 
            return state 
    }
}