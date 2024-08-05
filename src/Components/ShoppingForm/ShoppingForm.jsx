import React, { useState } from 'react';

export default function ShoppingForm({ 
    submitItem,
    defaultItemName = "",
    defaultQuantity = "",
    submitButtonText = "Add",
}) {
    const [item, setItem] = useState(defaultItemName);
    const [quantity, setQuantity] = useState(defaultQuantity);

    function handleItemChange(event) {
        setItem(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        submitItem(item, quantity);
        setItem('');
        setQuantity('');
    }

    return (
        <form class="formBox" action="#" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="item">Item</label>
            <input
                class="itemBox"
                type="text" 
                required
                id="item"
                name="item"
                value={item}
                onChange={handleItemChange} />
            <label htmlFor="quantity">Quantity</label>
            <input
                class="quantityBox" 
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                required 
                min="0"
                onChange={handleQuantityChange} />
            <button class="submitButton" type="submit">{ submitButtonText }</button>
        </form>
    );
}