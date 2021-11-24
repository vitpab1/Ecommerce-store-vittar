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

  const onDetails = () => {
    alert("products details");
  };

  return (
    <div>
      <p>{count}</p>

      <button onClick={decreaseItem}>-</button>
      <button onClick={addItem}>+</button>

      <button onClick={onAdd}>Agregar</button>
      <button onClick={onDetails}>Detalles</button>
    </div>
  );
};

export default ItemCount;
