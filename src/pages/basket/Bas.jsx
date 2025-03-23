
import { useSelector } from "react-redux";
import "./bas.css"



const Likes = () => {


  const data = useSelector((item) => item.carts.value);
  console.log(data);


  return (
    
       <div className="product1">
      <div className="container1">
        <div className="product-wrapper1">
      {data.map((item) => {
        return (
          <div key={item} className="product-cart1">
          
          <img src={item.url} alt={item.name} />
          <div className="product-details1">
            <h2 className="product-cart-title1">{item.title}</h2>
            <mark className="product-cart-mark1">
              {item.oyiga} so'm/oyiga
            </mark>
            <del className="product-cart-del1">{item.del}</del>
            <span className="product-cart-price1">${item.price}</span>
           
          </div>
        </div>
        );
      })}
      </div>
      </div>
    </div>
  )
};

export default Likes;
