import styled from 'styled-components';

export const Controls = styled.ul`
  padding: 20px 0 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
`;

export const Button = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: var(--btn-text-color);
  background: var(--btn-bg-colo);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: transform 0.3s ease-in-out;

  &:before {
    content: '';
    background: var(--btn-decoration-bg);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
