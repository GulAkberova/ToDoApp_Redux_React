import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../redux/reducers/toDoActions";

function Add() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const alldata = useSelector((state) => state.toDoReducer);
  console.log(alldata);
  const handleAdd = () => {
    let newTodo = {
      id: Math.floor(Math.random() * 9999),
      value: value
  }
  console.log(newTodo)
    dispatch(todoAction.add(newTodo))
    
  };

  return (
    <>
      <div className="todo_big">
        <div className="todo_bigdiv">
          <div className="todo_input_div">
            <input
              placeholder="add"
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => handleAdd()}>Add</button>
          </div>
          <div className="todo_add_input">
            {
              alldata.length ? alldata.map((i,key)=>(
                
                <div className="todo_add_div" key={key}>
                <p>{i.value}</p>
            </div>
              )) : <div><h2>Data not found...</h2></div>
            }

          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
