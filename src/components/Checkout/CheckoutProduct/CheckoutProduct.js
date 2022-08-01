import React from 'react'
import "./CheckoutProduct.css"
import { Button } from 'react-bootstrap';
import { useStateValue } from "../../../StateProvider"

function CheckoutProduct({ id, title, price, rating, image }) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div>
            <div className="checkoutProduct">
                <img src={image} alt="product-images" className='checkoutProduct__image' />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">
                        {title}
                    </p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {
                            Array(rating).fill().map((_, i) => (
                                <p><span role="img" aria-label="start">⭐</span></p>
                            ))
                        }
                    </div>
                    <Button onClick={removeFromBasket}>Remove from Basket</Button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct