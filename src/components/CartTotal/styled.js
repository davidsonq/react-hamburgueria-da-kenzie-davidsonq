import styled from "styled-components";
export const CartTotalS = styled.div`
  width: 100%;

  margin: 0 auto 30px;
  background-color: var(--color-gray-0);
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 21px 15px 21px 5%;

    div {
      flex-direction: row;
      border-top: 2px solid var(--color-gray-20);
      width: 100%;
      padding: 21px 0;
      display: flex;
      justify-content: space-between;
      h3 {
        font-weight: 600;
        font-size: 0.875rem;
        color: var(--color-gray-100);
      }
      p {
        font-size: 600;
        font-weight: 0.875rem;
        color: var(--color-gray-50);
      }
    }
    button {
      cursor: pointer;
      border-radius: 8px;
      width: 100%;
      max-width: 343px;
      height: 60px;
      border: 2px solid var(--color-gray-20);
      font-weight: 600;
      font-size: 1rem;
      color: var(--color-gray-50);
      background-color: var(--color-gray-20);
      transition: 0.5s;
      &:hover {
        color: var(--color-gray-20);
        background-color: var(--color-gray-50);
        transition: 0.5s;
      }
    }
  }
`;
