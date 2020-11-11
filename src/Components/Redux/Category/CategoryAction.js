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
       return axios.get('http://localhost:5000/deleteCategory/'+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onDeleteSuccess(res.data.msg));
               // history.push('/view-category');
               return true;
            }else{
                dispatch(onDeleteFailure(res.data.msg));  
                // history.push('/view-category'); 
                return false;
            }
        })
        .catch(err=>{
            console.log(err);
            return false;
        })
    }
}

export const onFetchSingleCategory=(id)=>{
    //console.log("On Fetch");
    return (dispatch)=>{
        return axios.get('http://localhost:5000/editCategory/'+id)
        .then(res=>{
            if(res.status==200){
                return res.data;
            }else{
                return false;
            }
        })
        .catch(err=>{
            return false;
        })
    }
}

export const onUpdateCategories=(data)=>{
    return (dispatch)=>{
        axios.post('http://localhost:5000/updateCategory', data)
        .then(res=>{
            if(res.status==200){
                dispatch(onUpdateSuccess(res.data.msg));
                
            }else{
                dispatch(onUpdateFailure(res.data.msg)); 
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

export const onUpdateSuccess=(msg)=>{
    return {
        type:"UPDATE_SUCCESS",
        payload:msg,
    }
}
export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE",
        payload:msg,
    }
}