import { HookUseEffect } from "../components/HookUseEffect";
import { HookUseReducer } from "../components/HookUseReducer";
import { HookUseState } from "../components/HookUseState";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
    </>
  );
}
