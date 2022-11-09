import React, { useState } from "react";
import { axiosPost } from "../../../../Services/axiosIntercepor";
import ModalLayout from "../../../../Modal/ModalLayout";
const AddProduct = ({ openModal, closeModal }) => {
  const [product_name, setProductName] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_discount, setProductDiscount] = useState("");
  const [product_image, setProductImage] = useState([]);

  const postProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("product_price", product_price);
    formData.append("product_description", product_description);
    formData.append("product_discount", product_discount);
    console.log(product_image);
    product_image?.forEach((item) => {
      formData.append("product_image", item);
    });

    console.log(formData);

    const response = await axiosPost("api/v1/product/addProduct", formData);
    console.log(response);
  };
  return (
    <ModalLayout closeModal={closeModal} openModal={openModal}>
      <form className="row g-3" onSubmit={(e) => postProduct(e)}>
        <div className="">
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Product_Name"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Product_Description"
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="">
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Producr_Price"
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>

        <div className="">
          <input
            type="text"
            className="form-control"
            placeholder="Product_Discount"
            onChange={(e) => setProductDiscount(e.target.value)}
          />
        </div>
        <div className="">
          <input
            onChange={(e) => setProductImage(Array.from(e.target.files))}
            type="file"
            name="product_image"
            multiple={true}
          />
        </div>

        <div className="">
          <button type="submit" className="btn productButton">
            Add Product
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default AddProduct;
