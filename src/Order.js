import React from 'react';
import './Order.css';
import { db } from "./firebase";

function Order() {
  return (
    <div className='order'>
       <h1>Order Status</h1>
       
       <div className='order__summary'>
        <p> Hey Nikita,</p>
        <p>Your order [123456] has shipped!</p>
        <p>It’s being shipped with [DTDC COURIER,JIND].</p>
        <p>Here’s a tracking number that you can use to check the location of your package: [NIK2456] (please note that tracking may take up to one business day to activate).</p>
        <p>Expected Deleivery by DD/MM/YYYY</p>
        <p>Thank you for placing your order!</p>
       </div>
    </div>
    
    
  )
}

export default Order