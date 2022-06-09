import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = (props) => {
    const {product,handleRemoveProduct} =props;
    const {name, price, img, shipping, quantity} = props.product;
    return (
        <div className='review-section-container'>
            <div className="review-image">
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-info" title={name}>
                    <p>{name.length >20 ? name.slice(0, 30) + '...' : name}</p>
                    <p>Price: <small className='orange-color'>{price}</small></p>
                    <p>Shipping: <small className='orange-color'>{shipping}</small></p>
                    <p>Quantity: <small className='orange-color'>{quantity}</small></p>
                </div>
                <div className="review-delete">
                    <button onClick={()=>handleRemoveProduct(product)}> <FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;