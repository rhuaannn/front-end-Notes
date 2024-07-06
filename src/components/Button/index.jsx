import { Container } from "./style";

// eslint-disable-next-line react/prop-types
export function Button({ title, loading = false, ...rest }) {
  // eslint-disable-next-line react/prop-types
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando" : title}
    </Container>
  );
}
