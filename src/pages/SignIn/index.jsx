import { Container, Form, Background } from "./style";
import {useState} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();

    function handleSignIn(){
        signIn({email, password});
    }

    return (
        <Container>
            <Form>
                <h1>RM NoTes!</h1>
                <p>Seus links Salvos com sucecsso.</p>
                <h2>
                    Faça seu <strong>Login</strong>
                </h2>

                <Input placeholder="E-MAIL" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)} />
                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">Criar conta</Link>
            </Form>
            <Background />:
        </Container>
    );
}
