import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);
   

    function increment(){
        setCount(count + 1);
        console.log(count);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Count +</button>
        </div>
    )
};