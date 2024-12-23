import { CheckIcon, ClipboardCopyIcon } from "lucide-react";
import { Clipboard } from "~/components/ui/clipboard";
import { Textarea } from "~/components/ui/textarea";
import { IconButton } from "~/components/ui/icon-button";

export const OutputClipboard = (props: Clipboard.RootProps) => {
  return (
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
  );
};
