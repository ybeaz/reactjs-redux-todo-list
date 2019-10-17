import React, { useState } from "react";
import { Container } from "./Container";
import { Row } from "./Row";
import "./ToDo.css";

const _ToDo = props => {
  const [inputVal, setInputVal] = useState("");

  const getCursorStyle = (reduxState, inputVal) => {
    const arrFilter = reduxState.filter(item => item === inputVal);
    let cursorStyle = "not-allowed";
    if (arrFilter.length === 0) {
      cursorStyle = "default";
    }
    return cursorStyle;
  };

  const getToDoList = arr => {
    return arr.map((item, i) => {
      return <Row key={`toDoItem_${i}`}>{item}</Row>;
    });
  };

  const handleEvents = act => {
    const { type, val } = act;
    switch (type) {
      case "INPUT":
        setInputVal(val);
        break;

      case "ADD":
        props.actions.action.ADD({ val: inputVal });
        break;

      default: {
      }
    }
  };

  const { reduxState } = props;

  const cursorStyle = getCursorStyle(reduxState, inputVal);

  // console.info('ToDo [R]', { reduxState })
  return (
    <div>
      <input
        type="text"
        className="ToDo__input"
        onChange={e => handleEvents({ type: "INPUT", val: e.target.value })}
        value={inputVal}
      />
      <button
        type="text"
        onClick={e => handleEvents({ type: "ADD" })}
        style={{ cursor: cursorStyle }}
      >
        Add
      </button>
      <div className="ToDo__table">{getToDoList(reduxState)}</div>
    </div>
  );
};

export const ToDo = Container(_ToDo);
