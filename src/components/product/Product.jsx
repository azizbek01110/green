import "./Product.css";
import { DATA } from "../../mock/index";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { incCart } from "../../context/cartSlice";
import { addToWishies } from "../../context/likeSlice"
const Product = () => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="container">
        <div className="product-wrapper">
          {DATA.map((item, index) => {
            return (
              <div key={index} className="product-cart">
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
  );
};

export default Product;