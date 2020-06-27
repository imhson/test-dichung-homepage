import { css } from 'styled-components';

const buttonStyles = css`
  display: block;
  height: 100px;
  box-sizing: border-box;
  padding: 2em 73px;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 17px;
  background: #77a300;
  min-width: 212px;

  &:active {
    background: #749f00;
    color: #fff;
  }
`;

export default buttonStyles;
