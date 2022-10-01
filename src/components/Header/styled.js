import styled from "styled-components";

export const HeaderS = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-0);
  justify-content: center;
  gap: 13px;
  align-items: center;
  padding: 14px 0 41px 0;
  @media (min-width: 980px) {
    & {
      flex-direction: row;
      height: 80px;
      padding: 0px 50px 30px 50px;
      align-items: flex-end;
      justify-content: space-between;
    }
  }
`;
