  import { useContext } from "react";
  import { CounterContext } from "../context/CounterContext";

const Products = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>Produtos</h1>
      <p>Valor do contador: {counter}</p>
    </>
  );
};

export default Products;
