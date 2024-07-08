import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUsers } from "react-icons/fi";

export function SignUp() {
    return(
        <Container>
            <Background/>:
            <Form>
                <h1>Rocket NoTes!</h1>
                <p>Seus links Salvos com sucecsso.</p>
                <h2>Faça seu <strong>CADASTRO!</strong></h2>
                <Input placeholder="Nome" type="text" icon={FiUsers} />
                <Input placeholder="E-MAIL" type="text" icon={FiMail} />
                <Input placeholder="Senha" type="password" icon={FiLock} />
                <Button title='Cadastrar'/>

                <a href="#">Voltar para o <strong>Login</strong></a>
            </Form>
        </Container>
    );
}
