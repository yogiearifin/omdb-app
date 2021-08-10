import { css } from "@emotion/css";

export const cardContainer = css`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    width: 300px;
  }
  margin: 30px 0;
  p,
  h1 {
    text-transform: capitalize;
    margin: 0;
    max-width: 300px
  }
`;
