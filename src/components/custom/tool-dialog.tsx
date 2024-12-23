// import React from "react";
import { XIcon } from "lucide-react";
import { Box, Divider, Grid, Stack } from "styled-system/jsx";
import { Button } from "~/components/ui/button";
import { Dialog } from "~/components/ui/dialog";
import { IconButton } from "~/components/ui/icon-button";
import { Tool } from "~/models/tool";

type Props = {
  tool: Tool;
} & Dialog.RootProps;

export const ToolDialog = ({ tool, ...props }: Props) => {
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
              <Stack>
                <Box>Input</Box>
              </Stack>
              <Stack>
                <Box>Output</Box>
              </Stack>
            </Grid>
            <tool.toolPanel />
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
