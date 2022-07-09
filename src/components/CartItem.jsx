import LabelPrice from "./LabelPrice";
import Quantity from "./Quantity";

export default function CartItem({ id, label, qty, price, handleChangeQty }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid tomato",
        margin: "0.5rem",
      }}
    >
      <LabelPrice label={label} price={price} />
      <Quantity id={id} qty={qty} handleChangeQty={handleChangeQty} />
    </div>
  );
}
