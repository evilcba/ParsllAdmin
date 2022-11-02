import axios, { Axios } from "axios";
import React, { useEffect ,useState} from "react";
import { axiosPost } from "../../Services/axiosIntercepor";
import ImageUpload from 'react-images-upload';   
import "./Products.css";
// import {Link} from 'react-router-dom';
const Products = () => {

  const[product_name, setProductName]=useState('');
  const[product_price,setProductPrice]=useState('');
  const[product_description,setProductDescription]=useState('');
  const[product_discount,setProductDiscount]=useState('');
  const[product_image,setProductImage]=useState([]);


  // Add the products

  const postProduct=async()=>{
    const formData =new FormData();
    formData.append("product_name", product_name)
    formData.append("product_price",product_price)
    formData.append("product_description",product_description)
    formData.append("product_discount",product_discount)
    formData.append("product_image",product_image)
    axiosPost('api/v1/product/addProduct',formData);  
  }
// const onDrop = product_images =>{

//   setProductImage=[...product_image,product_images];
// }

const[APIData,setAPIData]=useState([]);
useEffect(()=>{
axios.get('api/v1/product/showAllProducts')
.then((response)=>{
  setAPIData(response.data);
})
},[])

 


  return (
    <>
      <div className="Products">
        <h4 className="productTitle mt-5 ps-5 mb-5">Products</h4>
        <div className="addProducts">
          <div>
            <form className="row g-3">
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Product_Name"
                  onChange={(e)=>setProductName(e.target.value)}
                />
              </div>

              <div className="col-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Product_Description"
                  onChange={(e)=>setProductDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Producr_Price"
                  onChange={(e)=>setProductPrice(e.target.value)}
                />
              </div>

              <div className="col-3">
               <input type="text"
               className="form-control"
                placeholder="Product_Discount"
                onChange={(e)=>setProductDiscount(e.target.value)}
               
               
               />
                 
                
              </div>
              <div className="col-3">
                {/* <input  type="file"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Product_Image"
                  onChange={(e)=>setProductImage(e.target.value)}
                /> */}
                <ImageUpload
                withPreview={true}
                // onChange={}
               
                />
              </div>


              <div class="col-12">
                <button type="submit" className="btn productButton" onClick={postProduct}>
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="tableWhole">
          <table className="table">
            <thead className="tableHead">
              <tr>
                <th scope="col" className="tableName">
                  Product_Name
                </th>
                <th scope="col" className="tableName">
                  Product_Description
                </th>
                <th scope="col" className="tableName">
                  Product_Price
                </th>
                <th scope="col" className="tableName">
                  Product_Discount
                </th>
              
                <th scope="col" className="tableName">
                  Product_image
                </th>
                <th scope="col" className="tableName">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {APIData.map((data)=>{
                return(
                  <tr>
                    <th>{data.product_name}</th>
                    <th>{data.product_price}</th>
                    <th>{data.product_description}</th>
                    <th>{data.product_discount}</th>
                    <th>{data.product_image}</th>
                  </tr>
                )})} */}
              <tr>
          
                <td>Website</td>
                <td>complete management system</td>
                <td>30000</td>
                <td>5%</td>
                <td>Image</td>
                <td>
                  <i className="bi bi-pen"></i>
                  <i className="bi bi-trash3"></i>
                </td>
              </tr>
           
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
