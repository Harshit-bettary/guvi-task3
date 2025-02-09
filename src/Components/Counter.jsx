import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div class="counter-section">
        <button id="counter-btn"
                onClick={() => {
                    setCount(count-1);
                }}>-</button>
            <p>{count}</p>
            <button
                onClick={() => {
                    setCount(count+1);
                }} > +</button>
        </div>
           
        </>
    )
}
export default Counter;