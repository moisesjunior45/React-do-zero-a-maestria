import { useState, useEffect } from "react";

export function List({ getItems }) {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando items do DB...");
    
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>{myItems && myItems.map((item) => <p key={item}>{item}</p>)}</div>
  );
}


