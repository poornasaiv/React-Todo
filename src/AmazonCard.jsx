import AmazonPrice from './AmazonPrice.jsx';

export default function AmazonCard({title, description, price1, price2}){
    let styles = {
        border: "1px solid black",
        borderRadius: "10px",
        margin: "10px",
        width: "270px",
        height: "160px",
        backgroundColor: "skyblue"
    };
    return(
        <div style={styles}>
            <div>
                <h4>{title}</h4>
                <p>{description.map((item)=>{
                    return <li key={item} style={{textAlign:"left", marginLeft: "10px"}}>{item}</li>
                })}</p>
            </div>
            <AmazonPrice price1={price1} price2={price2} />
        </div>
    );
}

