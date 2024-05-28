import React, { useContext } from 'react';
import CartContext from '../../context/cart-context';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
// TODO
    const cartItemRemoveHandler = id => () => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    };

    return (
        <main className='page page__cart'>
            <div className='container'>
                { hasItems
                    ? 
                    <> 
                        {
                        cartCtx.items.map( item => (
                            <CartItem 
                                key={item.id} 
                                title={item.name} 
                                amount={item.amount} 
                                price={item.price} 
                                img={item.img} 
                                onRemove={cartItemRemoveHandler(item.id)}
                                onAdd={cartItemAddHandler(item)}
                            /> 
                            ))
                        }
                        <div className='total-amount'>{totalAmount}</div>
                    </>
                    : <h1 className='error-message'> No items in cart!</h1> 
                }
            </div>
        </main>
    )
}

export default Cart;