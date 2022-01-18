import styled from 'styled-components';

export const AnimationBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const Animation = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  width: 20px;
  height: 20px;
  transition: all 0.3s ease-in-out;

  &::after {
    content: ' ';
    display: block;
    background: none;
    animation: curcle 1.5s ease-in-out infinite;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    border: 2px solid;
    border-color: currentColor transparent currentColor transparent;
  }

  @keyframes curcle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
