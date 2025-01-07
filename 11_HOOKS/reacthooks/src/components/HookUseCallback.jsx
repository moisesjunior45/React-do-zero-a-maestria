import { useCallback, useState } from "react";
import { List } from "./List";

export function HookUseCallback() {
  const [counter, setCounter] = useState(0);

  const getItemFromDataBase = useCallback(() => {
    return ["a", "b", "c"];
  }, [])

  return (
    <div>
      <h2>UseCallback</h2>
      <List getItems={getItemFromDataBase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
}
