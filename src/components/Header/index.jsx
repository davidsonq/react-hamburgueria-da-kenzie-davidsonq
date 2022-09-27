import { InputSeach } from "../InputSeach";
import { Logo } from "../Logo";
export const Header = ({ setBackList }) => {
  const backList = (e) => {
    setBackList(e.target.value);
  };
  return (
    <header>
      <Logo />
      <InputSeach backList={backList} />
    </header>
  );
};
