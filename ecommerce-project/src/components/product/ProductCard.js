import './ProductCard.css'
function ProductCard({title,imgSrc,price}){
    return(
        <div className="product">
            <div className="product-title">{title}</div>
            <p className="product-price">{price}</p>
            <img width="300px" height="300px" src={imgSrc} alt="not avalaible"/>
           <button className="product-add-cart">Add to Cart</button>
        </div>
    )
}
export default ProductCard;