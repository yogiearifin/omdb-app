import { navbarContainer } from "./styles";
import "./hamburger.css";

const Navbar = () => {
  return (
    <div className={navbarContainer}>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/mymovielist">My Movie List</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a href="/">
        <h1>Fast Movie List</h1>
      </a>
    </div>
  );
};

export default Navbar;
