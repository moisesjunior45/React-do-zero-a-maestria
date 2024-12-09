// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

export function About() {
  const { contextValue } = useContext(SomeContext);

  return (
    <>
      <h1>About</h1>
      <p>Valor do contexto: {contextValue}</p>
    </>
  );
}
