import styled from "styled-components";
export const CartS = styled.aside`
  max-width: 365px;
  width: 95%;
  margin: 16px auto;
  @media (min-width: 980px) {
    margin-right: 50px;
  }
  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--color-white);
    width: 100%;
    height: 65px;
    background-color: var(--color-primary);
    display: flex;
    padding-left: 21px;
    align-items: center;
    border-radius: 5px 5px 0px 0px;
  }
  ul {
    width: 100%;
    background-color: var(--color-gray-0);
    max-height: 319px;
    overflow-y: auto;
  }
`;
export const LiCart = styled.li`
  width: 100%;
  height: 158px;
  gap: 20px;
  background-color: var(--color-gray-0);
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--color-gray-100);
  }
  p {
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--color-gray-50);
  }
`;
