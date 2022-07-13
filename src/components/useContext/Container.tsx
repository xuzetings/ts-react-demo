import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Container() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <button
        style={{
          backgroundColor: theme.primary.main,
          color: theme.primary.contrastText,
        }}
      >
        Primary
      </button>
      <br />
      <button
        style={{
          backgroundColor: theme.secondary.main,
          color: theme.secondary.contrastText,
        }}
      >
        Secondary
      </button>
    </>
  );
}