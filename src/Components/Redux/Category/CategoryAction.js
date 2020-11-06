import axios from 'axios';
export const onFetchCategories=()=>{
    //console.log("On Fetch");
    return (dispatch)=>{
        dispatch(onFetching);
        axios.get('http://localhost:5000/viewCategory')
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
            }else{
                dispatch(onFetchFailure(res.data.msg)); 
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const onFetching=()=>{
    return {
        type:"ON_FETCHING",
    }
}
export const onFetchSuccess=(data)=>{
    return {
        type:"FETCH_SUCCESS",
        payload:data,
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"FETCH_FAILURE",
        payload:msg,
    }
}