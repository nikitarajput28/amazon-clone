import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import Checkoutproduct from "./Checkoutproduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { db } from "./firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>Nikita</p>
                        <p>{user?.email}</p>
                        <p>123, Urban Esate,</p>
                        <p>Near Bus Stand,Jind</p>
                        <p>Haryana-126102</p>
                        <p>Phone Number- 1234567890</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <Checkoutproduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
            

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    
                    <div className='payment__details'>
                        <p>Card Accepted : <img src="https://www.shift4shop.com/images/credit-card-logos/cc-lg-5.png" alt="Card Accepted"/></p>
                        <p>Name on card : <input type="text" placeholder="Mr./Mrs./Miss"/></p>
                        <p>Credit Card Number : <input type="number" placeholder='1111-2222-3333-4444'/></p>
                        <p>Expiry Date : <input type="text" placeholder="DD/MM/YY"/></p>
                        <p>CVV : <input type="number" placeholder="1234"/></p>
                        <p>Order total : <input type="number" placeholder='$123.99'/></p>
                        <p><button onClick={e => history.push('/order')}>Buy Now</button></p>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
