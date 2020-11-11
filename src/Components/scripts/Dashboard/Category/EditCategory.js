import React, { Component } from 'react'
import {onUpdateCategories, onFetchSingleCategory} from '../../../Redux/Category/CategoryAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
class EditCategory extends Component {
    constructor(props){
        super(props);
        const id=this.props.match.params.id;
        this.state={
            id:"",
            categoryName:"",
        }
        this.getSingleCategory(id);
       

    }
     getSingleCategory=async(id)=>{
        const res=await this.props.onFetchSingleCategory(id);
        this.setState({id:res._id, categoryName:res.categoryName});
     }

    onhandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=()=>{
        console.log(this.state);
       const obj={
        id:this.state.id,
        categoryName:this.state.categoryName,
       }
         this.props.onUpdateCategories(obj);
    }
    render() {
        const {categoryName, id}=this.state;
        //console.log(this.props);
        const {success_msg, error}=this.props.categories;
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 card p-4">
                        <h1 className="text-info text-center">Edit Category</h1>
                        {success_msg?<p className="text-success">{success_msg}</p>:""}
                        {error?<p className="text-danger">{error}</p>:""}
                        <div className="form-group">
                            <label>Category Name</label>
                            <input type="text" name="categoryName" value={categoryName} className="form-control" onChange={this.onhandleChange}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Update Category</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    categories:state.categories
})
export default  connect(mapStateToProps, {onUpdateCategories, onFetchSingleCategory})(withRouter(EditCategory));
