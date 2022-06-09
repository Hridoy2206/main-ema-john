import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    const {name,img,seller,price,ratings} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <h5>Price: $ {price}</h5>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} star</p>   
            </div>
            <button onClick={()=>handleAddToCart(product)}
             className='btn-cart'>
                <p className='btn-text'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;