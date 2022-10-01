import styled from "styled-components";
export const ProductS = styled.li`
  width: 300px;
  height: 346px;
  border-radius: 5px;
  border: 2px solid var(--color-gray-20);
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: 0.5s;
  animation: product 0.5s linear;
  @keyframes product {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  &:hover {
    transition: 0.5s;
    border: 2px solid var(--color-gray-100);
    img {
      transition: 0.5s;
      transform: scale(1.1);
    }
  }
  figure {
    width: 296px;
    height: 150px;
    background-color: var(--color-gray-0);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 177px;
      transition: 0.5s;
    }
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-gray-100);
    margin-left: 21px;
  }
  h4 {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-gray-50);
    margin-left: 21px;
  }
  p {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-left: 21px;
  }
  button {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-white);
    background-color: var(--color-primary);
    cursor: pointer;
    margin-left: 21px;
    width: 106px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      background-color: var(--color-primary-50);
      border: 2px solid var(--color-primary-50);
    }
  }
`;
