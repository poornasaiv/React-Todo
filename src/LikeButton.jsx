import { useState } from "react";

export default function LikeButton(){
    let [isLike, setIsLike] = useState(false); 

    let handleClick = () => {
        let newValue = !isLike;
        setIsLike(newValue);
    }
    return (
        <>
            <h4>Sates in React</h4>
            <button onClick={handleClick}>
                {isLike ? <i className="fa-solid fa-heart" style={{color: "red"}}></i> : <i className="fa-regular fa-heart"></i>}
            </button>
        </>
    )
};