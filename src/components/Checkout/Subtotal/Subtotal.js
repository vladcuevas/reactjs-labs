import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-number-format'
import { useStateValue } from '../../../StateProvider'
import { getBasketTotal } from '../../../reducer'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}

        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        />

      <Button>Proceed to Checkout</Button>
    </div>
  )
}

export default Subtotal