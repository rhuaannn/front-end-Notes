import { useState } from "react";
import { api } from "../../services/api";
import { Container, Form, Background } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUsers } from "react-icons/fi";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handleSignUp() {
        if (!name || !email || !password) {
            alert("Preencha os campos!");
            return;
        }
        api.post("/users", {name, email, password})
        .then(() =>{
            alert('Usuário cadastrado com sucesso!')
            navigate("/");
        })
        .catch(error =>{
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível cadastrar!")
            }
        });
    }

    return (
        <Container>
            <Background />
            <Form>
                <h1>RM NoTes!</h1>
                <p>Seus links Salvos com sucesso.</p>
                <h2>
                    Faça seu <strong>CADASTRO!</strong>
                </h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUsers}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="E-MAIL"
                    type="text"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/">
                    Voltar para o <strong>Login</strong>
                </Link>
            </Form>
        </Container>
    );
}
