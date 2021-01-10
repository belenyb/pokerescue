import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context/cartContext';

const Button = ({ click, itemCount }) => {
   
    const [count, setCount] = useContext(Context);

    const handleClick = () => setCount(count + itemCount);

    return (
        <button type="button" className="nes-btn is-success mt-3 d-flex mx-auto" onClick={handleClick}>Comprar {itemCount}</button>
    )

}

export default Button;