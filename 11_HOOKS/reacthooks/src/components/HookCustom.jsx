import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export function HookCustom() {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div>
      <h2>HookCustom</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar</button>
      <hr />
    </div>
  );
}
