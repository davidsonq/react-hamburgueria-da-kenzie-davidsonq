import styled from "styled-components";

export const InputSeachS = styled.form`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 365px;
  input {
    height: 60px;
    width: 100%;
    max-width: 382px;
    border-radius: 8px;
    padding: 0px 10px 0px 15px;
    border: 2px solid var(--color-gray-20);
    outline: none;
    font-size: 1rem;
    font-weight: 400;
  }
  input::placeholder {
    color: var(--color-gray-20);
  }
  input:focus::placeholder {
    color: var(--color-gray-50);
  }
  input:focus {
    border: 2px solid var(--color-gray-100);
    color: var(--color-gray-50);
  }

  label {
    display: inline-flex;
    margin-top: -37px;
    padding: 0 31px;
  }
  label > svg {
    color: var(--color-primary);
  }
`;
