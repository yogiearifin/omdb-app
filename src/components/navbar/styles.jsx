import { css } from "@emotion/css";

export const navbarContainer = css`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #efefef;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
    margin-left: 30px;
  }
`;
// export const menuWrap = css`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1;
//   .toggler {
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 2;
//     cursor: pointer;
//     width: 50px;
//     height: 50px;
//     opacity: 0;
//   }
//   .hamburger {
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 1;
//     width: 60px;
//     height: 60px;
//     padding: 1rem;
//     background: rgba(13, 110, 139, 0.75);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .hamburger > div {
//     position: relative;
//     flex: none;
//     width: 100%;
//     height: 2px;
//     background: #fff;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: all 0.4s ease;
//   }
//   .hamburger > div::before,
//   .hamburger > div::after {
//     content: "";
//     position: absolute;
//     z-index: 1;
//     top: -10px;
//     width: 100%;
//     height: 2px;
//     background: inherit;
//   }
//   .hamburger > div::after {
//     top: 10px;
//   }
//   .toggler:checked + .hamburger > div {
//     transform: rotate(135deg);
//   }
//   .toggler:checked + .hamburger > div:before,
//   .toggler:checked + .hamburger > div:after {
//     top: 0;
//     transform: rotate(90deg);
//   }
//   .toggler:checked:hover + .hamburger > div {
//     transform: rotate(225deg);
//   }
//   .toggler:checked ~ .menu {
//     visibility: visible;
//   }
//   .toggler:checked ~ .menu > div {
//     transform: scale(1);
//     transition-duration: var(--menu-speed);
//   }
//   .toggler:checked ~ .menu > div > div {
//     opacity: 1;
//     transition: opacity 0.4s ease 0.4s;
//   }
//   .menu {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     visibility: hidden;
//     overflow: hidden;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .menu > div {
//     background: var(--overlay-color);
//     border-radius: 50%;
//     width: 200vw;
//     height: 200vw;
//     display: flex;
//     flex: none;
//     align-items: center;
//     justify-content: center;
//     transform: scale(0);
//     transition: all 0.4s ease;
//   }
//   .menu > div > div {
//     text-align: center;
//     max-width: 90vw;
//     max-height: 100vh;
//     opacity: 0;
//     transition: opacity 0.4s ease;
//   }
//   .menu > div > div {
//     text-align: center;
//     max-width: 90vw;
//     max-height: 100vh;
//     opacity: 0;
//     transition: opacity 0.4s ease;
//   }
//   .menu > div > div > ul > li > a {
//     color: inherit;
//     text-decoration: none;
//     transition: color 0.4s ease;
//   }
// `;
