import React, { Component } from 'react'
import {onAddProduct} from './../../../Redux/Product/ProductAction';

import {onFetchCategories} from './../../../Redux/Category/CategoryAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Spinner } from 'reactstrap';
class AddProduct extends Component {
    constructor(props){
        super();
        this.state={
            name:"", price:"",quantity:"",description:"", image:"",categoryId:""
        }
    }
    componentWillMount(){
        this.props.onFetchCategories();
    }
    onhandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onFileChange=(e)=>{
        //console.log(e.target.files[0]);
        this.setState({image:e.target.files[0]});
    }
    onSubmit=()=>{
       // console.log(this.state);
       const obj={
        name:this.state.name,
        price:this.state.price,
        quantity:this.state.quantity,
        description:this.state.description,
        image:this.state.image,
        categoryId:this.state.categoryId,
       }
        this.props.onAddProduct(obj);
    }
    render() {
        const {name,price,quantity,description,categoryId}=this.state;
        const {add_msg, error}=this.props.products;
        const {categories}=this.props;
        console.log(categories);
        if(categories.dataState=="NOT_INITIALIZED" || categories.dataState=="FETCHING"){
            return (
                <div className="container mt-5 text-center">
                    <Spinner color="primary" />
                </div>
            )
        }else{
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 card p-4">
                        <h1 className="text-info text-center">Add Product</h1>
                        {add_msg?<p className="text-success">{add_msg}</p>:""}
                        {error?<p className="text-danger">{error}</p>:""}
                        <div className="form-group">
                            <label>Category Name</label>
                            <select className="form-control" name="categoryId" onChange={this.onhandleChange}>
                                <option>--Select Category--</option>
                               {categories.categories.map((cat,index)=>(
                                <option key={index} value={cat._id}>
                                    {cat.categoryName}
                                </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" name="name" value={name} className="form-control" onChange={this.onhandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="text" name="price" value={price} className="form-control" onChange={this.onhandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input type="text" name="quantity" value={quantity} className="form-control" onChange={this.onhandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>description</label>
                            <input type="text" name="description" value={description} className="form-control" onChange={this.onhandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="file" name="image" className="form-control-file" onChange={this.onFileChange}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
    }
}

const mapStateToProps=state=>({
    products:state.products,
    categories:state.categories
})
export default connect(mapStateToProps, {onFetchCategories,onAddProduct})(withRouter(AddProduct));