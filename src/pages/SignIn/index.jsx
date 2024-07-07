import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>Rocket NoTes!</h1>
                <p>Seus links Salvos com sucecsso.</p>
                <h2>Faça seu <strong>Login</strong></h2>

                <Input placeholder="E-MAIL" type="text" icon={FiMail} />
                <Input placeholder="Senha" type="password" icon={FiLock} />
                <Button title='Entrar'/>

                <a href="#">Criar conta</a>
            </Form>
            <Background/>:
        </Container>
    );
}
