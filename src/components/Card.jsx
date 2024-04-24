import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/Card.css";
import Items from "./Items";

const Card = () => {
  const [items, setItems] = useState([]);
  const [textInput, setTextinput] = useState("");
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const onClickHandler = () => {
    setItems((prevData) => {
      return [
        ...prevData,
        {
          name: textInput,
          purchased: false,
        },
      ];
    });

    setTextinput("");
    toast("Item Added To The List");
  };

  return (
    <div>
      <div className="card">
        <h2>Grocery Bud</h2>
        <div className="input-container">
          <input
            value={textInput}
            onChange={(e) => {
              setTextinput(e.target.value);
            }}
            type="text"
          />
          <button onClick={onClickHandler}>Add Item</button>
        </div>
      </div>

      <div className="list-container">
        {items.map((elem, index) => (
          <Items
            items={items}
            setItems={setItems}
            index={index}
            itemName={elem.name}
            isPurchased={elem.purchased}
            key={index}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
