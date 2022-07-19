import React from 'react'
import './Product.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

function Product({id, title, price, rating, image}) {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className='productPrice'>
                    <small>$</small>
                    <strong>{price}</strong></p>
                <div className="product__rating">
                  {
                    Array(rating).fill().map((_, i) => (
                      <p>⭐</p>
                      ))
                  }</div>
            </div>
            <img src={image} alt="product-images" />
            <Button>Add to Basket</Button>
        </div>
    </div>
  )
}

export default Product