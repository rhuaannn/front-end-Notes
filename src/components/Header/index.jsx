import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";
import{Link} from "react-router-dom";
import {useAuth} from "../../hooks/auth";
import {api} from "../../services/api";


export function Header() {
    const {signOut, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlayer

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} />
        <div>
          <span>Bem-Vindo!</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}
