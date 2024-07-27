// import { useContext } from "react";
// import {CounterContext} from "../context/CounterContext";

import ChangeCounter from "../components/ChangeCounter";
// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  // const {counter} = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor contexto */}
      <ChangeCounter />
    </>
  );
};

export default Home;
