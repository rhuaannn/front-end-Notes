import { Container, Form, Avatar } from "./style";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiUsers, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {api} from "../../services/api";
import avatarPlayer from "../../assets/background.png";

export function Profile() {
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState("");
    const [passwordNew, setPasswordNew] = useState("");

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlayer
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        };
        await updateProfile({ user, avatarFile });
    }
    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="" /> {/* Alterado para usar o estado avatar */}
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file" onChange={handleChangeAvatar} />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUsers}
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)} // Adicionado onChange
                />
                <Input
                    placeholder="Email"
                    type="email"
                    icon={FiMail}
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)} // Adicionado onChange
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPasswordNew(e.target.value)}
                />
                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    );
}
