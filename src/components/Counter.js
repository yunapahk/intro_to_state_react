import React, { useState } from 'react';

export default function Counter() {
    // Create an instance of state using useState
    const [count, setCount] = useState(0);

    // Event handler for incrementing count
    const handleIncrement = () => {
        setCount(count + 1);
    };

    // Event handler for decrementing count
    const handleDecrement = () => {
        setCount(count - 1);
    };

    return ( <div>
        <span>Current Count: {count}</span>
            <section>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </section>
    </div>
    );
}