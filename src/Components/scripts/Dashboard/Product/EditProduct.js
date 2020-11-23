import React, { Component } from 'react'
import {onEditProduct,onUpdateProduct} from './../../../Redux/Product/ProductAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
class EditProduct extends Component {
    constructor(props){
        super();
        this.state={
            name:props.products.products.name, price:props.products.products.price,quantity:props.products.products.quantity,description:props.products.products.description,
            id:props.products.products._id
        }
    }
    onhandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=()=>{
       // console.log(this.state);
       const obj={
        name:this.state.name,
        price:this.state.price,
        quantity:this.state.quantity,
        description:this.state.description,
        id:this.state.id
       }
       this.props.onUpdateProduct(obj,this.props.history);
    }
    render() {
        const {name,price,quantity,description}=this.state;
        const {add_msg, error}=this.props.products;
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 card p-4">
                        <h1 className="text-info text-center">Edit Product</h1>
                        {add_msg?<p className="text-success">{add_msg}</p>:""}
                        {error?<p className="text-danger">{error}</p>:""}
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
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Update Product</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    products:state.products
})
export default connect(mapStateToProps, {onEditProduct,onUpdateProduct})(withRouter(EditProduct));