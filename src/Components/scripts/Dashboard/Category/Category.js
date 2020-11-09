import React, { Component } from 'react'
import {onFetchCategories, onDeleteCategories} from './../../../Redux/Category/CategoryAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Spinner } from 'reactstrap';
class Category extends Component {
    constructor(props){
        super();
    }
    componentDidMount(){
        console.log("componentDidMount");
        this.props.onFetchCategories();
    }

    onDelete=(id)=>{
        //console.log(id);
        this.props.onDeleteCategories(id, this.props.history);
    }
    onEdit=(id)=>{
        //console.log(id);
        this.props.onDeleteCategories(id, this.props.history);
    }
    render() {
        //console.log(this.props);
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
                                    <button className="btn btn-danger btn-sm" onClick={()=>this.onEdit(el._id)}>Delete</button>
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