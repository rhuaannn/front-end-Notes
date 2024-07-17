import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";
import{Link} from "react-router-dom";
import {useAuth} from "../../hooks/auth";

export function Header() {
    const {signOut} = useAuth();
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/rhuaannn.png" />
        <div>
          <span>Bem-Vindo!</span>
          <strong>Rhuaannn</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}
