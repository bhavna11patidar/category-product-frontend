import axios from 'axios';

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
