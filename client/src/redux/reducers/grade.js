const initialState ={}

export default function grade(state= initialState, action){
    switch(action.type){
        case "SAVE_GRADES":
            return {
                ...state,
                data: action.payload
            }
        default:
            return{
                ...state
            }
    }
}