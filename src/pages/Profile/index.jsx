import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiUsers, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/rhuaannn.png" alt="" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUsers} />
                <Input placeholder="Email" type="email" icon={FiMail} />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Button title="Salvar"/>
            </Form>
        </Container>
    );
}
