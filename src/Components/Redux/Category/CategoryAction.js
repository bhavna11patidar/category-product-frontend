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

export const onAddCategories=(data)=>{
    return (dispatch)=>{
        axios.post('http://localhost:5000/saveCategory', data)
        .then(res=>{
            if(res.status==200){
                dispatch(onAddSuccess(res.data.msg));
            }else{
                dispatch(onAddFailure(res.data.msg)); 
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
}



export const onDeleteCategories=(id, history)=>{
    console.log(history);
    return (dispatch)=>{
        dispatch(onFetching);
        axios.get('http://localhost:5000/deleteCategory/'+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onDeleteSuccess(res.data));
               // history.push('/view-category');
            }else{
                dispatch(onDeleteFailure(res.data.msg));  
                // history.push('/view-category'); 
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


export const onAddSuccess=(msg)=>{
    return {
        type:"ADD_SUCCESS",
        payload:msg,
    }
}
export const onAddFailure=(msg)=>{
    return {
        type:"ADD_FAILURE",
        payload:msg,
    }
}


export const onDeleteSuccess=(msg)=>{
    return {
        type:"DELETE_SUCCESS",
        payload:msg,
    }
}
export const onDeleteFailure=(msg)=>{
    return {
        type:"DELETE_FAILURE",
        payload:msg,
    }
}