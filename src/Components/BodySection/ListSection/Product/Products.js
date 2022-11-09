import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { axiosGet, axiosPost } from "../../../Services/axiosIntercepor";
import ImageUpload from "react-images-upload";
import "./Products.css";
import AddProduct from "./AddProduct/AddProduct";
// import {Link} from 'react-router-dom';
const Products = () => {
  const [images, setImages] = useState([]);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  // Add the products

  // const onDrop = product_images =>{

  //   setProductImage=[...product_image,product_images];
  // }

  const closeAddProductHandler = () => {
    setShowAddProductModal((prev) => !prev);
  };
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axiosGet("api/v1/product/getAllProducts", {}).then((res) =>
      setAPIData(res.data)
    );
  }, []);

  const showImages = async (product_id) => {
    const images = await axiosGet(`api/v1/product/viewImages/${product_id}`);
    setImages(images.data);
  };

  return (
    <>
      <div className="Products">
        <h4
          className="productTitle mt-5 ps-5 mb-5"
          onClick={() => setShowAddProductModal((prev) => !prev)}
        >
          Add Product
        </h4>
        <div className="addProducts">
          <AddProduct
            openModal={showAddProductModal}
            closeModal={closeAddProductHandler}
          />
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
              {APIData.map((data) => {
                return (
                  <tr>
                    <th>{data.product_name}</th>
                    <th>{data.product_price}</th>
                    <th>{data.product_description}</th>
                    <th>{data.product_discount}</th>
                    <th>{data.product_image}</th>
                    <th onClick={() => showImages(data.product_id)}>Click</th>
                  </tr>
                );
              })}
              {images.map((item) => (
                <div>
                  <img
                    style={{ height: "5rem", width: "5rem" }}
                    src={`http://localhost:9494/api/v1/image/product/${item.image}`}
                    alt="Ima"
                  ></img>
                </div>
              ))}
              {/* <tr>
                <td>Website</td>
                <td>complete management system</td>
                <td>30000</td>
                <td>5%</td>
                <td>Image</td>
                <td>
                  <i className="bi bi-pen"></i>
                  <i className="bi bi-trash3"></i>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
