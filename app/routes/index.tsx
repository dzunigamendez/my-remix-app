import { Container } from "~/components/container";
import { Header, Title } from "~/components/header";
import { Menu, MenuLink } from "~/components/menu";

export default function Index() {
  return (
    <Container>
      <Header>
        <Title>My Remix App</Title>
      </Header>
      <Menu>
        <MenuLink to="/workflow">Workflow</MenuLink>
      </Menu>
    </Container>
  );
}
