import "./styles.css";
import {
  Button,
  PrimaryButton,
  Container,
  ReversedButton,
  Input,
  PassInput,
  Rotate,
  StyledLink
} from "./StyledComp";
import { Link } from "./Utility";

export default function App() {
  return (
    <Container className="App">
      <Button>styled button</Button>
      <Button green>styled button green</Button>
      <PrimaryButton>styled button primary</PrimaryButton>
      <Button as={ReversedButton}>ReversedButton</Button>
      <Input placeholder="Enter Your name" />
      <PassInput placeholder="Enter Your password" size="1rem" />
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
      <Link>This is a link</Link>
      <StyledLink decoration="none">This is styled link</StyledLink>
    </Container>
  );
}
