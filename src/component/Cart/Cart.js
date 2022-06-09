import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;

    let total = 0;
    let shipping=0
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax= (total/10);
    const grandTotal= tax+total+shipping;
    return (
        <div>
            <h3>Order summary</h3>
            <p>Selected items:{cart.length}</p>
            <div className="cart-info">
                <p>Total price:$ {total} </p>
                <p>Shipping charge:$ {shipping}</p>
                <p>Tax: $ {tax.toFixed(2)}</p>
                <h4>Grand total:$ {grandTotal.toFixed(2)}</h4>
                {props.children}
            </div>
        </div>
    );
};

export default Cart;