import { BsSearch } from "react-icons/bs";
import { InputSeachS } from "./styled";
export const InputSeach = ({ backList }) => {
  return (
    <InputSeachS
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        id="Seach"
        onChange={backList}
        type="text"
        placeholder="Digitar Pesquisa"
      />
      <label htmlFor="Seach">
        <BsSearch id="Seach" />
      </label>
    </InputSeachS>
  );
};
