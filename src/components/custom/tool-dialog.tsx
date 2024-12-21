// import React from "react";
import { CheckIcon, ClipboardCopyIcon, XIcon } from "lucide-react";
import { Box, Divider, Grid, Stack } from "styled-system/jsx";
import { Button } from "~/components/ui/button";
import { Clipboard } from "~/components/ui/clipboard";
import { Dialog } from "~/components/ui/dialog";
import { IconButton } from "~/components/ui/icon-button";
import { Textarea } from "~/components/ui/textarea";
import { Field } from "~/components/ui/field";
import { Tool } from "~/models/tool";
import { useState } from "react";

type InputPanelProps = {
  onClickExecute: (name: string) => void;
};

const InputPanel = ({ onClickExecute }: InputPanelProps) => {
  const [name, setName] = useState("");

  return (
    <Stack>
      <Box>Input</Box>
      <Field.Root>
        <Field.Input
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        ></Field.Input>
      </Field.Root>
      <Button onClick={() => onClickExecute(name)}>Execute</Button>
    </Stack>
  );
};

const OutputPanel = (props: Clipboard.RootProps) => {
  return (
    <Stack>
      <Box>Output</Box>
      <Clipboard.Root {...props} position="relative">
        <Clipboard.Control>
          <Clipboard.Input asChild>
            <Textarea id="output" backgroundColor="#EEEEEE" />
          </Clipboard.Input>
          <Clipboard.Trigger asChild position="absolute" top="1" right="1">
            <IconButton variant="ghost">
              <Clipboard.Indicator copied={<CheckIcon />}>
                <ClipboardCopyIcon />
              </Clipboard.Indicator>
            </IconButton>
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Clipboard.Root>
    </Stack>
  );
};

type Props = {
  tool: Tool;
} & Dialog.RootProps;

export const ToolDialog = ({ tool, ...props }: Props) => {
  const [result, setResult] = useState("");

  const execute = (name: string) => {
    tool.fn(name).then(setResult);
  };

  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger asChild>
        <Button>Use</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content width="90%" height="90%">
          <Stack gap="4" p="6">
            <Stack gap="1">
              <Dialog.Title>{tool.name}</Dialog.Title>
              <Dialog.Description>{tool.description}</Dialog.Description>
            </Stack>
            <Divider />
            <Grid columns={2} gap="6">
              <InputPanel onClickExecute={execute} />
              <OutputPanel value={result} />
            </Grid>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <XIcon />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
