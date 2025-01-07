import { useLayoutEffect, useEffect, useState } from "react";

export function HookUseLayoutEffect() {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");
    setName("Mudou de novo!");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome");
  }, []);

  return (
    <div>
      <h2>UseLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
}
