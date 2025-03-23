
import { useSelector } from "react-redux";
import "./Likes.css"
import { incCart } from "../../context/cartSlice";
import { addToWishies } from "../../context/likeSlice"
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";

const Likes = () => {

  const dispatch = useDispatch();
  const data = useSelector((item) => item.carts.value);
  console.log(data);


  return (
    
       <div className="product">
      <div className="container">
        <div className="product-wrapper">
      {data.map((item) => {
        return (
          <div key={item} className="product-cart">
          <button onClick={() => dispatch(addToWishies(item))}>
            <CiHeart className="product-cart-icon-heart" />
          </button>
          <img src={item.url} alt={item.name} />
          <div className="product-details">
            <h2 className="product-cart-title">{item.title}</h2>
            <mark className="product-cart-mark">
              {item.oyiga} so'm/oyiga
            </mark>
            <del className="product-cart-del">{item.del}</del>
            <span className="product-cart-price">${item.price}</span>
            <button onClick={() => dispatch(incCart(item))}>
              <FiShoppingCart className="product-cart-icon-shop" />
            </button>
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
