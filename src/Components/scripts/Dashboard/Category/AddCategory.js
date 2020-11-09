import React, { Component } from 'react'
import {onAddCategories} from './../../../Redux/Category/CategoryAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
class AddCategory extends Component {
    constructor(props){
        super();
        this.state={
            categoryName:"",
        }
    }
    onhandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=()=>{
       // console.log(this.state);
       const obj={
        categoryName:this.state.categoryName,
       }
        this.props.onAddCategories(obj);
    }
    render() {
        const {categoryName}=this.state;
        console.log(this.props);
        const {success_msg, error}=this.props.categories;
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 card p-4">
                        <h1 className="text-info text-center">Add Category</h1>
                        {success_msg?<p className="text-success">{success_msg}</p>:""}
                        {error?<p className="text-danger">{error}</p>:""}
                        <div className="form-group">
                            <label>Category Name</label>
                            <input type="text" name="categoryName" value={categoryName} className="form-control" onChange={this.onhandleChange}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Add Category</button>
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
export default  connect(mapStateToProps, {onAddCategories})(withRouter(AddCategory));
