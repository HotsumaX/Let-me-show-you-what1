import React from 'react';

const Form1 = () => {
  return (
    <div>
      <h2>Current payment form</h2>
      <div>card1</div>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          test <br />
          <input type="checkbox" />
        </label>
        <label>
          test 2 <br />
          <input type="text" />
        </label>
        <label htmlFor="item3">
          gettting it in
          <select name="list" id="2">
            <option value="blank" />
            <option value="item1">item1</option>
            <option value="item2">item2</option>
            <option value="item3">item3</option>
            <option value="item4">item4</option>
          </select>
        </label>
        <label htmlFor="item4">
          test 1
          <input type="radio" name="item1" id="1" />
          test 2
          <input type="radio" name="item1" id="2" />
          test3
          <input type="radio" name="item1" id="3" />
        </label>
        <button type="submit">Start free trial - pay after 7 days</button>
      </form>
    </div>
  );
};

export default Form1;
