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
