import React from "react";
import "./Products.css";
const Products = () => {
  return (
    <>
      <div className="Products">
        <h4 className="productTitle mt-5 ps-5 mb-5">Products</h4>
        <div className="tableWhole">
          <table className="table">
            <thead className="tableHead">
              <tr>
                <th scope="col" className="tableName">
                  Product_Id
                </th>
                <th scope="col" className="tableName">
                  Product_Name
                </th>
                <th scope="col" className="tableName">
                  Product_Price
                </th>
                <th scope="col" className="tableName">
                  Product_Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
