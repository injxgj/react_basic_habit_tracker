import React, { memo } from 'react';

const Input = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input type='text' className='add-input' placeholder='Habit' ref={inputRef}></input>
      <button className='add-button' type='submit'>
        Add
      </button>
    </form>
  );
});
export default Input;
