import React from 'react'
import './Product.css'

import { useStateValue } from "../../StateProvider";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id, image: image, price: price, rating: rating,
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong></p>
        <div className="product__rating">
          {
            Array(rating).fill().map((_, i) => (
              <p><span role="img" aria-label="start">⭐</span></p>
            ))
          }</div>
      </div>
      <img src={image} alt="product-images" />
      <Button onClick={addToBasket} >Add to Basket</Button>
    </div>
  )
}

export default Product