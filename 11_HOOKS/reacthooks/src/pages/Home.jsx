import { HookUseEffect } from "../components/HookUseEffect";
import { HookUseReducer } from "../components/HookUseReducer";
import { HookUseState } from "../components/HookUseState";
import { HookUseRef } from "../components/HookUseRef";

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

export function Home() {
  const { contextValue } = useContext(SomeContext);
  return (
    <>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef />
    </>
  );
}
