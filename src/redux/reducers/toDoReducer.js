
function toDoReducer(state, action){
    if (state == undefined) {
        return [];
    }

    switch (action.type) {
        case 'ADD_DATA':
            return [...state, action.payload]
        case 'DELETE_DATA':
            return state=state.filter(index=>index.id != action.payload.id)
           
    
        default:
           return state
    }

}
export default toDoReducer