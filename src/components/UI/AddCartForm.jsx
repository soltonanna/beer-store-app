import React, { useRef } from 'react';
import Input from './FormItems/Input';

const AddCartForm = (props) => {
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = +amountInputRef.current.value;

        props.onAddToCart(enteredAmount);

        amountInputRef.current.value = "1";
    }

    return (
        <form onSubmit={submitHandler}>
            <Input 
                ref= {amountInputRef}
                type="number" 
                id="beer-count"
                max='10'
                min='1' 
                step='1'
                defaultValue="1"
            />
            <button>Add to cart</button>
        </form>
    )
}

export default AddCartForm;