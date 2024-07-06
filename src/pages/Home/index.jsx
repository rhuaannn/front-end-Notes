import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocket - Notes</h1>
            </Brand>
            <Header></Header>
            <Menu>
                <li>
                    <ButtonText title="Todos"></ButtonText>
                </li>
                <li>
                    <ButtonText title="React" isActive></ButtonText>
                </li>
                <li>
                    <ButtonText title="Node"></ButtonText>
                </li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
            </Search>
            <Content>
                <Section title="Minhas notas"></Section>
                <Note
                    data={{
                        title: "React Modal",
                        tags: [
                            { id: "1", name: "React " },
                            { id: "2", name: "NodeJs" },
                        ],
                    }}
                />,
                   <Note
                    data={{
                        title: "React Modal",
                        tags: [
                            { id: "3", name: "React Native" },
                            { id: "4", name: "Django" },
                        ],
                    }}
                />
            </Content>
            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    );
}
