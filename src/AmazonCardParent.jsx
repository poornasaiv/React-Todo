import AmazonCard from "./AmazonCard";

export default function AmazonCardParent(){
    let styles = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div style = {styles}>
            <AmazonCard title="Logitech MX Master 3S" description = {["8,000 DPI", "5 Programmable Buttons"]} price1="₹12,495" price2="₹8,999" />
            <AmazonCard title="Apple Pencil (2nd Gen)" description = {["Intuitive touch surface", "Designed for iPad Pro"]} price1="₹11,900" price2="₹9,199" />
            <AmazonCard title="Zebronics Zeb-Transformer" description = {["Intuitive touch surface", "Designed for iPad Pro"]} price1="₹1,599" price2="₹899" />
            <AmazonCard title="Portronics Toad 23 Wireless Mouse" description = {["Wireless Mouse 2.4GHz", "Optical Orientation"]} price1="₹599" price2="₹278" />
        </div>
)
};