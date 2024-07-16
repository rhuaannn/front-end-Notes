import { Header } from "../../components/Header";
import {Link} from "react-router-dom";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Container, Form } from "./style";

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar notas</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Titulo" />
                    <Textarea placeholder="Observaçao" />
                    <Section title="Links uteis">
                        <NoteItem value="https://rhuanmarques.com.br" />
                        <NoteItem isNew />
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React" />
                            <NoteItem isNew />
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    );
}
