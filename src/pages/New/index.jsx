import { useState } from "react";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Container, Form } from "./style";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

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
        if (newTag === "") {
            alert("É necessário digitar uma tag");
            return;
        }
        setTags((prevState) => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags((prevState) => prevState.filter((tag) => tag !== deleted));
    }

    async function handleNewNote() {
        if(!title){
            alert("Digite o título da nota!");
        }
        await api.post("/notes", {
            title,
            tags,
            links,
        });
        alert("Nota criada!");
        navigate("/");
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
                    <Input
                        placeholder="Titulo"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                        placeholder="Observaçao"
                        onChange={(e) => setDescription(e.target.value)}
                    />
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
                    <Button title="Salvar" onClick={handleNewNote} />
                </Form>
            </main>
        </Container>
    );
}
