import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {
  const randomGreeting = useSelector((state) => state.greeting);
  return (
    <>
      <h1>Welcom</h1>
      {randomGreeting.successful ? (
        <h2>{randomGreeting.name.greeting}</h2>
      ) : null}
    </>
  );
};

export default Greetings;
