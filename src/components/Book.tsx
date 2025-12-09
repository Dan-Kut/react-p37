import type { ReactNode } from "react"

interface BookProps {
    image?:string,
    name?:string,
    price?:number,
    characteristics:string,
    children?:ReactNode
};

const Book = ({image, name="none", price, characteristics, children}:BookProps) => {
    return(
        <div style={{width:300, height:600, padding:10, margin:10}}>
            <img src={image}></img>
            <h2>{name}</h2>
            <h4>{price}</h4>
            {children}
            <p>{characteristics}</p>
        </div>
    );
}

export default Book;