const initialState ={}

export default function user(state= initialState, action){
    switch(action.type){
        case "SAVE_CURRENT_USER":
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