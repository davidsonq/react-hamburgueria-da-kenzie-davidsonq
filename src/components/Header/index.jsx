import { InputSeach } from "../InputSeach";
import { Logo } from "../Logo";
import { HeaderS } from "./styled";
export const Header = ({ setBackList }) => {
  const backList = (e) => {
    setBackList(e.target.value);
  };
  return (
    <HeaderS>
      <Logo />
      <InputSeach backList={backList} />
    </HeaderS>
  );
};
