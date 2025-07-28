export default function AmazonPrice({price1, price2}){
    
    return (
        <div style={{backgroundColor: "gold", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", margin: "0 5px 0 5px"}}>
                <span><del>{price1}</del></span>
                &nbsp; &nbsp;
                <span>{price2}</span>
        </div>
    );
}