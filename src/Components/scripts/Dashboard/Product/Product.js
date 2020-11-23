import React, { Component } from 'react'
import {onFetchProduct,onEditProduct,onDeleteProduct } from './../../../Redux/Product/ProductAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Spinner } from 'reactstrap';
class Product extends Component {
    constructor(props){
        super();
    }
    componentDidMount(){
        this.props.onFetchProduct();
    }
    onDelete=async(id)=>{
        //console.log(id);
        const res=await this.props.onDeleteProduct(id);
        if(res){
        this.props.onFetchProduct();
        }
    }
    onEdit=(id)=>{
        console.log(id);
        this.props.onEditProduct(id,this.props.history);
    }
    render() {
        console.log(this.props)
        const {success_msg}=this.props.products;
        if(this.props.products.dataState=="NOT_INITIALIZED" || this.props.products.dataState=="FETCHING"){
        return (
            <div className="container mt-5 text-center">
                <Spinner color="primary" />
            </div>
        )
        }
        else{
            const {products}=this.props.products;
             const {success_msg}=this.props.products;
             console.log(products);
             if(products.length>0){
            return (
            <div className="container mt-5">
                         {success_msg?<p className="text-success">{success_msg}</p>:""}
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>S. no</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quntity</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((data,i)=>(
                        <tr style={{fontWeight:"bold"}}>
                            <td>{i+1}</td>
                            <td>{data.categoryId.categoryName}</td>
                            <td >{data.name}</td>
                            <td >{data.price}</td>
                            <td >{data.quantity}</td>
                            <td >{data.description}</td>
                            <td ><img height="100" width="100" src={`http://localhost:5000/${data.image}`}/></td>
                            <td>
                            <button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(data._id)}>Delete</button>
                            <button className="btn btn-info btn-sm" onClick={()=>this.onEdit(data._id)}>Edit</button>
                            </td>
                        </tr>))}  
                        </tbody>
                    </table>
                    </div>
                )
            }else{
                return(
                <div className="container mt-5 text-center">
                    <h2 className="text-info">No Product found, Please start Adding!!</h2>
                </div>
                )
            }
        }
    }
}

const mapStateToProps=state=>({
   products:state.products
})
export default  connect(mapStateToProps, {onFetchProduct,onEditProduct,onDeleteProduct})(withRouter(Product));