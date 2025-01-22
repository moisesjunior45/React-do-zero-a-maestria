import { createContext } from "react";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

// 5 - desestruturando props
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 8 - type
type textOrNull = string | null;

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}
// 10 - Utilizando context
import Context from "./components/Context";

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Moisés";
  const age: number = 22;
  const isWorking: boolean = false;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "opa";

  // 9 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando!</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          comentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo post"
          content="Algum conteúdo"
          comentsQty={5}
          tags={["python"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        <Context />
      </>
    </AppContext.Provider>
  );
}

export default App;
