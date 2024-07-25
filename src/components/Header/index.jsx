import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Header() {
    const { signOut, user,avatarPlayer } = useAuth();
    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlayer;

        const navigate = useNavigate();
    function handleShutdown(){
        navigate("/")
       signOut()
    }
    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} />
                <div>
                    <span>Bem-Vindo!</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={handleShutdown}>
                <RiShutDownLine
                    onClick={handleShutdown}
                />
            </Logout>
        </Container>
    );
}
