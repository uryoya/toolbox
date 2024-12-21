import { Card } from "~/components/ui/card";
import { Tool } from "~/models/tool";

type Props = {
  tool: Tool;
} & Card.RootProps;

export const ToolCard = ({ tool, children, ...props }: Props) => (
  <Card.Root width="sm" {...props}>
    <Card.Header>
      <Card.Title>{tool.name}</Card.Title>
      <Card.Description>{tool.description}</Card.Description>
    </Card.Header>
    <Card.Footer>{children}</Card.Footer>
  </Card.Root>
);
