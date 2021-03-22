import React from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = React.useState(0);
  const spanRef = useRef();
  const handleIncrement = useCallback(() => {
    setCount({ count: count + 1 });
  });
  return (
    <li className='habit'>
      <span className='habit-name'>Reading</span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};
export default SimpleHabit;
