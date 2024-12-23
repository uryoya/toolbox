import "./index.css";
import { css } from "styled-system/css";
import { Container, Wrap } from "styled-system/jsx";
import { SearchBox } from "./components/custom/search-box";
import { ToolCard } from "./components/custom/tool-card";
import { ToolDialog } from "./components/custom/tool-dialog";
import { Tool } from "./models/tool";
import Greeting from "./toolPanels/Greeting";
import UuidV4 from "./toolPanels/UuidV4";

const tools: Tool[] = [
  {
    name: "Greet from Rust",
    description: "...",
    toolPanel: Greeting,
  },
  {
    name: "UUID v4",
    description: "Generate UUID v4",
    toolPanel: UuidV4,
  },
];

const App = () => {
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
            {tools.map((tool, idx) => (
              <ToolCard key={idx} tool={tool}>
                <ToolDialog tool={tool} />
              </ToolCard>
            ))}
          </Wrap>
        </Container>
      </main>
    </div>
  );
};

export default App;
