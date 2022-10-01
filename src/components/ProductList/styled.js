import styled from "styled-components";

export const ProductListS = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 980px) {
    align-items: flex-start;
    margin-left: 40px;
  }
  h2 {
    margin: 30px 10px;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-gray-100);
    span {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-gray-50);
    }
  }
  ul {
    width: 100%;
    margin: 15px 10px;
    padding-bottom: 20px;
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
    .list__noPage {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      @media (min-width: 980px) {
        ul {
          margin: 0;
        }
        & {
          margin-left: 0;
        }
      }
      h3 {
        font-weight: 700;
        font-size: 1.125rem;
        color: var(--color-gray-100);
        text-align: center;
      }
    }
  }
  @media (min-width: 980px) {
    ul {
      overflow-x: unset;
      flex-wrap: wrap;
    }
  }
`;
