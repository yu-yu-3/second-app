import React, { useState } from 'react';

// export default function Counter () {
// const [count, setCount] = useState(0)
//     return (
//         <div> 
//         <p> счетчик кликов {count}</p>
//         <button onClick={() => setCount(count + 1)} >+ </button>
//         </div>
//     )
// }
const Example = () => {
const [count, setCount] = useState(0);

    return (
        <div> 
        <p> счетчик кликов {count}</p>
        <button onClick={() => setCount(count + 1)} >+ </button>
        </div>
    );    
};
    
export default Example;
