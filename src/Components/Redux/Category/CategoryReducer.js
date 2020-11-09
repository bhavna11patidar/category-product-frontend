const initialState={
    categories:null,
    error:null,
    dataState:"NOT_INITIALIZED",
    success_msg:null,
}

export default function(state=initialState, action){
   // console.log(action);
    switch(action.type){
        case "ON_FETCHING":
            return {
                ...state,
                dataState:"FETCHING",
            }

            case "FETCH_SUCCESS":
            return {
                ...state,
                categories:action.payload,
                dataState:"FETCHED_SUCCESSFULLY",

            }
            case "ADD_SUCCESS":
                return {
                    ...state,
                    success_msg:action.payload,
                }
            case "ADD_FAILURE":
                return {
                    ...state,
                    error:action.payload,
                }
            case "DELETE_SUCCESS":
                return {
                    ...state,
                    success_msg:action.payload,
                }
            case "DELETE_FAILURE":
                return {
                    ...state,
                    error:action.payload,
                }
        default:
            return state;
    }
}