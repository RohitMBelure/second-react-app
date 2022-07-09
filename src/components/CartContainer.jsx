import CartItem from "./CartItem";
import Total from "./Total";
import { useState } from "react";

// url=`https://jsonplaceholder.typicode.com/todos`;

const initialData = [
  {
    id: 1,
    product_name: "Noodles",
    price: 30,
    qty: 1,
  },
  {
    id: 2,
    product_name: "Biryani",
    price: 90,
    qty: 2,
  },
  {
    id: 3,
    product_name: "Chips",
    price: 10,
    qty: 3,
  },
];

export default function CartContainer() {
  const [data, setData] = useState(initialData);
  // const [total, setTotal] = useState(0);

  const handleChangeQty = (id, amount) => {
    console.log(id, amount);
    let updatedData = data.map((item) =>
      item.id === id
        ? {
            ...item,
            qty: item.qty + amount,
          }
        : item
    );

    setData(updatedData);
  };

  const calculateTotal = (data) => {
    let updatedData = data.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    return updatedData;
  };

  return (
    <div>
      <h1>Cart Page</h1>
      {data.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          label={item.product_name}
          qty={item.qty}
          price={item.price}
          handleChangeQty={handleChangeQty}
        />
      ))}
      <Total total={calculateTotal(data)} />
    </div>
  );
}
