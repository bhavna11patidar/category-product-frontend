const intialState={
    isAuthenticate:false,
    user:{},
    error:null,
}

export default function(state=intialState, action){
    switch(action.type){
        case "ON_LOGIN_SUCCESS":
            return {
                ...state,
                isAuthenticate:true,
                user:action.payload,
            }
        case "ON_LOGIN_FAILURE":
            return {
                ...state,
                error:action.payload,
            }
        default:
            return state;
    }
}