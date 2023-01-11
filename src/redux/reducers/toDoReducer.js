let alldata=[]

function toDoReducer(state=alldata, action){

    switch (action.type) {
        case 'ADD_DATA':
            return [...state, action.payload]
        case 'DELETE_DATA':
            return state=state.filter(index=>index != action.payload)
           
    
        default:
           return state
    }

}
export default toDoReducer