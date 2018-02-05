export function createSearch(search) {
    return {
        type: "CREATE_SEARCH",
        payload: search,
    };
}

export function selectSearchToEdit(id){
    return {
        type: "SELECT_SCHOOL_TO_EDIT",
        payload: id,
    }
}

export function updateSearch(search){
    return {
        type: "UPDATE_SEARCH",
        payload: search,
    }
}