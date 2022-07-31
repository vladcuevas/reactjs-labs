import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-number-format'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>$0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}

        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        />

      <Button>Proceed to Checkout</Button>
    </div>
  )
}

export default Subtotal