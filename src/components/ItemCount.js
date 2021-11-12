import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  console.log("soy props", { stock, initial });

  const [count, setCount] = useState(initial);

  const addItem = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  const decreaseItem = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };

  const onAdd = () => {
    alert("Compraste " + count + " Macetas");
  };
  return (
    <div>
      <p>{count}</p>

      <button onClick={decreaseItem}>-</button>
      <button onClick={addItem}>+</button>

      <button onClick={onAdd}>Agregar</button>
    </div>
  );
};

export default ItemCount;
