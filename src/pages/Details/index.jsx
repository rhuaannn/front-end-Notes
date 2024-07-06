import { Container, Links, Content } from "./style.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";


export function Details() {
    //Children n se passa como propriedade comum como o title
    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <ButtonText title="Excluir nota" />
                    <h1>Introdução ao REACT </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, officia
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, praesentium.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, sit?
                    </p>
                    <Section title="Links úteis">
                        <Links>
                            <li>
                                <a href="https://rhuanmarques.com.br">Link 1</a>
                            </li>
                            <li>
                                <a href="https://rhuanmarques.com.br">Link 2</a>
                            </li>
                        </Links>
                    </Section>
                    <Section title="Marcadores">
                        <Tag title="Express" />
                        <Tag title="NodeJs" />
                    </Section>

                    <Button title="Voltar" />
                </Content>
            </main>
        </Container>
    );
}
