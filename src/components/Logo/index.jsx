import logo from "../../logo.svg";
import { LogoS } from "./styled";
export const Logo = () => {
  return (
    <LogoS>
      <img src={logo} alt="Imagem Logo" />
    </LogoS>
  );
};
