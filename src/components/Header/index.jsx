import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/rhuaannn.png" />
        <div>
          <span>Bem-Vindo!</span>
          <strong>Rhuaannn</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}
