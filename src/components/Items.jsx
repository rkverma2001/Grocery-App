import { useState } from "react";
import "./Items.css";

const Items = ({ itemName, index, items, setItems, isPurchased }) => {
  const [isChecked, setIsChecked] = useState(isPurchased);
  const deleteHandler = () => {
    setItems((prevState) => {
      const data = [...prevState];
      data.splice(index, 1);
      return data;
    });
  };

  return (
    <div className="item-container">
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={isPurchased}
          onChange={(e) => {
            setIsChecked((prevValue) => !prevValue);
            setItems((prevState) => {
              const data = [...prevState];
              data[index].purchased = !isPurchased;
              return data;
            });
          }}
        />
      </div>
      <div className="item-name">
        <p style={{ textDecoration: isPurchased ? "line-through" : "none" }}>
          {itemName}
        </p>
      </div>
      <div className="delete-button-container">
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default Items;
