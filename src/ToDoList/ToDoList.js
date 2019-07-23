import React, { useState, useRef, useEffect } from 'react';

import './index.css';

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });
  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus();
  });

  const handleInput = event => {
    const itemText = event.target.value;
    setCurrentItem({ text: itemText, key: Date.now() });
  };

  const addItem = event => {
    event.preventDefault();
    console.log('hello add input');
  };
  return (
    <div className="app-body">
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={addItem}>
            <input
              type="text"
              placeholder="Task"
              ref={inputElement}
              value={currentItem.text}
              onChange={handleInput}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ToDoList;
