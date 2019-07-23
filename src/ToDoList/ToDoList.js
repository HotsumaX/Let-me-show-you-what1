import React, { useState, useRef, useEffect } from 'react';

import './index.css';

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
  });

  const handleInput = event => {
    const itemText = event.target.value;
    setCurrentItem({ text: itemText, key: Date.now() });
  };

  const addItem = event => {
    event.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== '') {
      console.log(newItem);
      const item = [...items, newItem];
      setItems(item);
      setCurrentItem({ text: '', key: '' });
    }
  };

  const TodoItems = props => {
    const createTasks = item => {
      return (
        <div
          onClick={() => props.deleteItem(item.key)}
          onKeyPress={() => props.deleteItem(item.key)}
          role="button"
          tabIndex={0}
        >
          <li key={item.key}>{item.text}</li>
        </div>
      );
    };
    const todoEntries = props.entries;
    const listItems = todoEntries.map(createTasks);

    return <ul className="theList">{listItems}</ul>;
  };

  const deleteItem = key => {
    const filteredItems = items.filter(item => item.key !== key);
    setItems(filteredItems);
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
      <TodoItems entries={items} deleteItem={deleteItem} />
    </div>
  );
};
export default ToDoList;
