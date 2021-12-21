import React, { useEffect, useState } from 'react';
import { changQuantity } from '../features/cart/cartSlice'

import '../assets/css/Quantity.css'
import { useDispatch } from 'react-redux';

function Quantity(props) {
    const { isCartPage, value, id } = props
    let newValue = value ? value : 1
    const [quantity, setQuantity] = useState(newValue)
    const dispatch = useDispatch()

    if (quantity <= 0) {
        setQuantity(1)
    }

    useEffect(() => {
        dispatch(changQuantity({ id, quantity }))
    }, [quantity, id, dispatch])

    const handleChangeQuantity = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrease = () => {
        setQuantity(quantity - 1)
    }

    return (
        <div className="product-quantity-btn">
            <button className='product-btn-minus' onClick={handleDecrease}>-</button>
            <input type="number" className={`product-input ${isCartPage ? 'inCart' : ''}`} value={quantity} onChange={handleChangeQuantity} />
            <button className='product-btn-plus' onClick={handleIncrease}>+</button>
        </div>
    );
}

export default Quantity;