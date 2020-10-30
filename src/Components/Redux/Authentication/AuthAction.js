import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from './../../utils/setAuthToken';
export const onRegister =(newUser, history)=>{
    return (dispatch)=>{
        axios.post("http://localhost:5000/register",newUser)
        .then(res=>{
            if(res.status==200){
                console.log(res.data);
                history.push('/');
            }else{
                console.log(res);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const onLogin=(userData, history)=>{
    //console.log(userData);
    return (dispatch)=>{
        axios.post("http://localhost:5000/login",userData)
        .then(res=>{
            //console.log(res);
           if(res.status==200){
             const {token}= res.data;
             setAuthToken(token);
             //console.log(token);  
                const userData=jwtDecode(token);
                //console.log(userData);
                localStorage.setItem('user',userData);
                dispatch(onLoginSuccess(userData));
                history.push("/dashboard");
           }else if(res.status==400){
               console.log(res);
               dispatch(onLoginFailure(res.data.msg))
           }
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const onLoginSuccess=(user)=>{
    return {
        type:'ON_LOGIN_SUCCESS',
        payload:user
    }
}

export const onLoginFailure=(msg)=>{
    return {
        type:"ON_LOGIN_FAILURE",
        payload:msg
    }
}