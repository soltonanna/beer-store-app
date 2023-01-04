import React from 'react';

const CartItem = ({img, title, subtitle, amount, price, onRemove, onAdd}) => {
  return (
    <div className='cart-item'>
        <div className='cart-img'>
            <div style={{backgroundImage: `url(${img})`}}></div>
        </div>

        <div className='cart-title'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
        
        <div className='cart-amount'>
            <button onClick={onRemove}>−</button>
                <span>{amount}</span>
            <button onClick={onAdd}>+</button>
        </div>

        <div className='cart-price'>
            ${amount * price}
        </div>
    </div>
  )
}

export default CartItem;