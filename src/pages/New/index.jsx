import { useState } from "react";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Container, Form } from "./style";

export function New() {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddLink() {
        if (newLink === "") {
            alert("É necessário digitar algum link!");
            return;
        }
        setLinks((prevState) => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted) {
        setLinks((prevState) => prevState.filter((link) => link !== deleted));
    }

    function handleAddTag() {
        if (newTag === ""){
            alert("É necessário digitar uma tag");
            return;
        }
        setTags((prevState) => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags((prevState) => prevState.filter((tag) => tag !== deleted));
    }
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
                        {links.map((link, index) => (
                            <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => handleRemoveLink(link)}
                            />
                        ))}

                        <NoteItem
                            isNew
                            value={newLink}
                            onChange={(e) => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            {tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))}
                            <NoteItem
                                isNew
                                onClick={handleAddTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                value={newTag}
                            ></NoteItem>
                        </div>
                    </Section>
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    );
}
