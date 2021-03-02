const initialState ={}

export default function subject(state= initialState, action){
    switch(action.type){
        case "SAVE_SUBJECTS":
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