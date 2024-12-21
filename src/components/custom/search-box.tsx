import { Field } from "@ark-ui/react/field";
import { css } from "styled-system/css";
import { Search } from "lucide-react"; // LucideのSearchアイコン

type Props = {
  placeholder: string;
};

export const SearchBox = ({ placeholder }: Props) => {
  return (
    <Field.Root
      className={css({
        position: "relative",
        width: "100%",
        maxWidth: "600px",
      })}
    >
      <Field.Input
        placeholder={placeholder}
        className={css({
          width: "100%",
          padding: "0.75rem 3rem 0.75rem 1rem",
          fontSize: "md",
          borderRadius: "full",
          // border: "1px solid",
          // borderColor: "gray",
          boxShadow: "sm",
          backgroundColor: "white",
          _focus: {
            outline: "none",
            borderColor: "blue.400",
            boxShadow: "0 0 0 2px rgba(198, 198, 198, 0.5)",
          },
        })}
      />
      <Search
        className={css({
          position: "absolute",
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          color: "gray.500",
          pointerEvents: "none",
        })}
        size={20}
      />
    </Field.Root>
  );
};
