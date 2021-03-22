import React, { PureComponent } from 'react';
import Habit from './habit';
import Input from './input';

class Habits extends PureComponent {
  render() {
    const { habits, onAdd, onIncrement, onReset, onDecrement, onDelete } = this.props;
    console.log('habits');
    return (
      <>
        <Input onAdd={onAdd}></Input>
        <ul>
          {habits.map((habit, index) => (
            <Habit key={habit.id} habit={habit} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} />
          ))}
        </ul>
        <button className='habits-reset' onClick={onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
