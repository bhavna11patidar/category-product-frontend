const initialState={
    products:null,
    error:null,
    dataState:"NOT_INITIALIZED",
    success_msg:null
}
export default function(state=initialState, action){
    switch(action.type){
        case "ON_FETCHING":
            return {
                ...state,
                dataState:"FETCHING",
            }

        case "FETCH_SUCCESS":
            return {
                ...state,
                products:action.payload,
                dataState:"FETCHED_SUCCESSFULLY",

            }
        case "FETCH_FAILURE":
            return {
                ...state,
                error:action.payload,
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
        case "Edit_SUCCESS":
                    // console.log(action.payload)
                    return {
                        ...state,
                        products:action.payload,
                    }
        case "Edit_FAILURE":
                    return {
                        ...state,
                        error:action.payload,
                    }
        case "Update_SUCCESS":
            // console.log(action.payload)
            return {
                ...state,
                products:action.payload,
            }
        case "Update_FAILURE":
            return {
                ...state,
                error:action.payload,
            }
        default:
        return state;
    }
}
