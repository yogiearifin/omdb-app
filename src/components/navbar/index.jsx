import { navbarContainer } from "./styles";
import "./hamburger.css";

const Navbar = () => {
  return (
    <div className={navbarContainer}>
      <div class="menu-wrap">
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
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
