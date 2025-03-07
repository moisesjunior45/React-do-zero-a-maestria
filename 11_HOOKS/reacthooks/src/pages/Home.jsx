
// useContext
import { useContext } from "react";

// componentes
import { HookUseEffect } from "../components/HookUseEffect";
import { HookUseReducer } from "../components/HookUseReducer";
import { HookUseState } from "../components/HookUseState";
import { HookUseRef } from "../components/HookUseRef";
import { SomeContext } from "../components/HookUseContext";
import { HookUseCallback } from "../components/HookUseCallback";
import { HookUseMemo } from "../components/HookUseMemo";
import { HookUseLayoutEffect } from "../components/HookUseLayoutEffect";
import { HookUseImperativeHandle } from "../components/HookUseImperativeHandle";
import { HookCustom } from "../components/HookCustom";

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
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </>
  );
}
