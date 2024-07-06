import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import {FiPlus, FiSearch} from "react-icons/fi";
import {Input} from "../../components/Input";

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocket - Notes</h1>
            </Brand>
            <Header></Header>
            <Menu>
                <li>
                    <ButtonText title="Todos" ></ButtonText>
                </li>
                <li>
                    <ButtonText title="React" isActive></ButtonText>
                </li>
                <li>
                    <ButtonText title="Node"></ButtonText>
                </li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>
            <Content></Content>
            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    );
}
