import { invoke } from "@tauri-apps/api/core";
import "./index.css";
import { css } from "../styled-system/css";
import { SearchBox } from "./components/custom/search-box";
import { Container, Wrap } from "styled-system/jsx";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";

const commands = [
  {
    name: "Greet from Rust",
    description: "...",
    fn: (name: string) => {
      return invoke("greet", { name });
    },
  },
  {
    name: "UUID v1",
    description: "Generate UUID v1",
    fn: () => {
      const uuid = crypto.randomUUID();
      return uuid;
    },
  },
  {
    name: "UUID v3",
    description: "Generate UUID v3",
    fn: () => {
      const uuid = crypto.randomUUID();
      return uuid;
    },
  },
  {
    name: "UUID v4",
    description: "Generate UUID v4",
    fn: () => {
      const uuid = crypto.randomUUID();
      return uuid;
    },
  },
  {
    name: "UUID v7",
    description: "Generate UUID v7",
    fn: () => {
      const uuid = crypto.randomUUID();
      return uuid;
    },
  },
];

function App() {
  return (
    <div
      className={css({
        backgroundColor: "#EEEEEE",
        height: "100vh",
        width: "100vw",
      })}
    >
      <header
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "1rem",
        })}
      >
        <SearchBox placeholder="Search command..." />
      </header>
      <main>
        <Container>
          <Wrap gap={4}>
            {commands.map(({ name, description }, idx) => (
              <Card.Root key={idx} width="sm">
                <Card.Header>
                  <Card.Title>{name}</Card.Title>
                  <Card.Description>{description}</Card.Description>
                </Card.Header>
                <Card.Footer>
                  <Button>Use</Button>
                </Card.Footer>
              </Card.Root>
            ))}
          </Wrap>
        </Container>
      </main>
    </div>
  );
}

export default App;
