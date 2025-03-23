
import "./Footer.css";
import { FaInstagram, FaTelegram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Biz haqimizda</h3>
          <ul>
            <li><a href="#">Topshirish punktlari</a></li>
            <li><a href="#">Vakansiyalar</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Foydalanuvchilarga</h3>
          <ul>
            <li><a href="#">Biz bilan bog‘lanish</a></li>
            <li><a href="#">Savol-Javob</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Tadbirkorlarga</h3>
          <ul>
            <li><a href="#">Uzumda soting</a></li>
            <li><a href="#">Sotuvchi kabinetiga kirish</a></li>
            <li><a href="#">Topshirish punktini ochish</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Ilovani yuklab olish</h3>
          <div className="app-links">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="AppStore" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          </div>
          <h3>Uzum ijtimoiy tarmoqlarda</h3>
          <div className="social-icons">
            <FaInstagram />
            <FaTelegram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#">Maxfiylik kelishuvi</a> | <a href="#">Foydalanuvchi kelishuvi</a>
        <p>© 2025 XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan</p>
      </div>
    </footer>
  );
};

export default Footer;
