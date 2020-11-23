import axios from 'axios';
export const onFetchProduct=()=>{
    //console.log("On Fetch");
    return (dispatch)=>{
        dispatch(onFetching);
        axios.get('http://localhost:5000/viewProduct')
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

export const onAddProduct=(data)=>{
    const fd=new FormData();
    fd.append("name",data.name);
    fd.append("price",data.price);
    fd.append("quantity",data.quantity);
    fd.append("description",data.description);
    fd.append("image",data.image);
    fd.append("categoryId",data.categoryId);
    return (dispatch)=>{
        axios.post('http://localhost:5000/saveProduct', fd)
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

export const onDeleteProduct=(id, history)=>{
    // console.log(history);
    return (dispatch)=>{
        dispatch(onFetching);
       return  axios.get('http://localhost:5000/deleteProduct/'+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onDeleteSuccess(res.data.msg));
                return true;
            }else{
                dispatch(onDeleteFailure(res.data.msg));
                return false; 
            }
        })
        .catch(err=>{
            console.log(err);
        })
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

export const onEditProduct=(id,history)=>{   
    return (dispatch)=>{
        axios.post('http://localhost:5000/editProduct/'+id)
        .then(res=>{
            if(res.status==200){
                console.log(res)
                dispatch(onEditSuccess(res.data));
                history.push('/edit-product');
            }else{
                dispatch(onEditFailure(res.data.msg));  
                // history.push('/view-category'); 
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const onEditSuccess=(data)=>{
    return {    
        type:"Edit_SUCCESS",
        payload:data,
    }
}
export const onEditFailure=(msg)=>{
    return {
        type:"Edit_FAILURE",
        payload:msg,
    }
}

export const onUpdateProduct=(data,history)=>{   
    return (dispatch)=>{
        axios.post('http://localhost:5000/updateProduct/',data)
        .then(res=>{
            if(res.status==200){
                // console.log(res)
                dispatch(onUpdateSuccess(res.data));
                history.push('/view-product');
            }else{
                dispatch(onUpdateFailure(res.data.msg));  
                // history.push('/view-category'); 
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const onUpdateSuccess=(data)=>{
    return {    
        type:"Update_SUCCESS",
        payload:data,
    }
}
export const onUpdateFailure=(msg)=>{
    return {
        type:"Update_FAILURE",
        payload:msg,
    }
}