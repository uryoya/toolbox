import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import { Grid } from "styled-system/jsx";
import { OutputClipboard } from "~/components/custom/textarea-clipboard";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";

const Greeting = () => {
  const [count, setCount] = useState(1);
  const [result, setResult] = useState("");

  const exec = () => {
    invoke("uuid_v4", { count }).then((data) => {
      console.log(data);
      setResult(data as string);
    });
  };

  return (
    <Grid columns={2} gap={6}>
      <Field.Root>
        <Field.Input
          placeholder="1"
          type="number"
          onChange={(e) => setCount(Number(e.target.value))}
        ></Field.Input>
        <Button onClick={() => exec()}>Execute</Button>
      </Field.Root>
      <OutputClipboard value={result} />
    </Grid>
  );
};

export default Greeting;
