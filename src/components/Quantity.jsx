export default function Quantity({ id, qty, handleChangeQty }) {
  const incrementCount = (id) => {
    handleChangeQty(id, 1);
  };
  const decrementCount = (id) => {
    handleChangeQty(id, -1);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        // border: "1px solid tomato",
      }}
    >
      <button disabled={qty === 0} onClick={() => decrementCount(id, -1)}>
        -
      </button>
      <div>
        <h4>{qty}</h4>
      </div>
      <button onClick={() => incrementCount(id, 1)}>+</button>
    </div>
  );
}
