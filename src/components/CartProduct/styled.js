import styled from "styled-components";
export const CartProductS = styled.li`
  width: 100%;
  background-color: var(--color-gray-0);
  display: flex;
  padding: 20px 0px 0px 15px;
  flex-direction: row;
  gap: 10px;
  animation: cartTos 0.5s linear;

  @keyframes cartTos {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    25% {
      transform: translateX(10px);
    }
    50% {
      opacity: 0.5;
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes cartTosReverse {
    0% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
    }
  }

  figure {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-gray-20);
    img {
      width: 70px;
    }
  }
  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-gray-50);
  }
`;
export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  margin-right: 15px;
  max-width: 243px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h2 {
      width: unset;
      height: unset;
      background-color: var(--color-gray-0);
      color: var(--color-gray-100);
      font-weight: 700;
      padding: 0;
      font-size: 1.125rem;
    }
    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      font-weight: 500;
      font-size: 0.75rem;
      color: var(--color-gray-25);
      transition: 0.5s;
      &:hover {
        color: var(--color-gray-100);
        text-decoration: underline;
      }
    }
  }
`;
