import React from 'react';
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
    const { product } = props;
  return (
    <div className='productdisplay'>
          <div className="productdisplay-left">
              <div className="productdisplay-img-list">
                  <img src={product.image} alt="Product" />
                  <img src={product.image} alt="Product" />
                  <img src={product.image} alt="Product" />
                  <img src={product.image} alt="Product" />
              </div>
              <div className="productdisplay-img">
                  <img className='productdisplay-main-img' src={product.image} alt="Product" />
              </div>
          </div>
          <div className="productdisplay-right">
              <h1>{product.name}</h1>
              <div className="productdisplay-right-star"></div>
          </div>
    </div>
  )
}

export default ProductDisplay