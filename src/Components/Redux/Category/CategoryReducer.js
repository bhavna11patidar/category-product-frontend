const initialState={
    categories:null,
    error:null,
    dataState:"NOT_INITIALIZED",
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
            case "FETCH_FAILURE":
                return {
                    ...state,
                    error:action.payload,
                }
        default:
            return state;
    }
}