import GlobalStyles from "./Components/Styles/Global";
import { Container } from "./Components/Styles/Container.styled";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Button from "./Components/Button";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Content />
        <Button />
      </Container>
    </>
  );
}

export default App;
