import React from 'react';
import faker from 'faker';

const {
  name: { firstName, lastName },
  address: { zipCode, city },
  lorem: { paragraph },
} = faker;

const Home = () => {
  return (
    <div>
      home stuff goes here
      <div>{firstName()}</div>
      <div>{lastName()} </div>
      <div>{zipCode()}</div>
      <div> {city()}</div>
      <div>{paragraph()}</div>
    </div>
  );
};

export default Home;
