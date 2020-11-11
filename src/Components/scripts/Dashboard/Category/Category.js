import React, { Component } from 'react'
import {onFetchCategories, onDeleteCategories} from './../../../Redux/Category/CategoryAction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import { Spinner } from 'reactstrap';
class Category extends Component {
    constructor(props){
        super();
    }
    componentDidMount(){
        //console.log("componentDidMount");
        this.getAllCategories()
    }


    getAllCategories=()=>{
        this.props.onFetchCategories();
    }

    onDelete=async(id)=>{
        //console.log(id);
      const res=await this.props.onDeleteCategories(id, this.props.history);
      if(res){
        this.getAllCategories();
      }
    }
    onEdit=(id)=>{
        //console.log(id);
        this.props.onDeleteCategories(id, this.props.history);
    }
    render() {
       
        const {success_msg}=this.props.categories;
        console.log(this.props.categories.success_msg);
        if(this.props.categories.dataState=="NOT_INITIALIZED" || this.props.categories.dataState=="FETCHING"){
        return (
            <div className="container mt-5 text-center">
                <Spinner color="primary" />
            </div>
        )
        }
        else{
            const {categories}=this.props.categories;
            if(categories.length>0){
                return (
                    <div className="container mt-5">
                        
                    {success_msg?<p className="text-success">{success_msg}</p>:""}
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>S. no</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((el,i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{el.categoryName}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                                    <Link className="btn btn-success btn-sm" to={`edit-category/${el._id}`}>Edit</Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                )
            }else{
                return(
                <div className="container mt-5 text-center">
                    <h2 className="text-info">No categories found, Please start Adding!!</h2>
                </div>
                )
            }
        }
    }
}

const mapStateToProps=state=>({
    categories:state.categories
})
export default  connect(mapStateToProps, {onFetchCategories, onDeleteCategories})(withRouter(Category));