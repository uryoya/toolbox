import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import { Grid } from "styled-system/jsx";
import { OutputClipboard } from "~/components/custom/textarea-clipboard";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";

const Greeting = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const exec = (name: string) => {
    invoke("greet", { name }).then((data) => setResult(data as string));
  };

  return (
    <Grid columns={2} gap={6}>
      <Field.Root>
        <Field.Input
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        ></Field.Input>
        <Button onClick={() => exec(name)}>Execute</Button>
      </Field.Root>
      <OutputClipboard value={result} />
    </Grid>
  );
};

export default Greeting;
