import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <Link className="navLink" to={`/`}>home</Link>
        <Link className="navLink" to={`/items`}>items</Link>
        <Link className="navLink" to={`/login`}>login</Link>
      </div>
    </>
  );
}
export default Footer;
