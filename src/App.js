import React, { useState } from "react";
import ToDolist from "./todolist";
const App = () => {

  const [inputlist, setinputlist] = useState("");
  const [item, setitem] = useState([]);
  const itemcall = (event) => {
    setinputlist(event.target.value);
  };

  const itemlist = () => {
    setitem((oldItem) => {
      return [...oldItem, inputlist];
    });
    setinputlist("");
  };

  const deleteItem = (id) => {
    console.log("item deleted");
    setitem((oldItem)=>{
      return oldItem.filter((arrel,index)=>{
        return index!==id;
      });
    });
  };
  return (
    <>
      <div className="main">
        <div className="center">
          <br />
          <h1>To-Do List</h1>
          <br />
          <input type="text" placeholder="Add your tasks" value={inputlist} onChange={itemcall} />
          <button onClick={itemlist}>+</button>

          <ol>
            {/* <li>{inputlist}</li> */}
            {
              item.map((itemval, index) => {
                return <ToDolist key={index} id={index} text={itemval} onSelect={deleteItem} />
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;