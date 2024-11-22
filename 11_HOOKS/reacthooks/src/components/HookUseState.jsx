import { useState } from "react";

export function HookUseState() {
  // 1 - usestate
  let userName = "João";

  const [name, setName] = useState("Moisés");

  const changeNames = () => {
    userName = "João Souza";
    setName("Moisés Júnior");

    console.log(userName);
    console.log(name);
  };

  //   2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    // envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>UseState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      {/* 2 - useState e input */}
      <h2>UseState e input</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos!</p>
      <hr />
    </div>
  );
}
