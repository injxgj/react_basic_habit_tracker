import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name: name, count: 0 }];
    this.setState({ habits });
    // console.log('add' + name);
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count > 0 ? habit.count - 1 : habit.count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((cur) => cur !== habit);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits });
  };
  render() {
    const totalCount = this.state.habits.reduce((acc, cur) => acc + cur.count, 0);
    console.log('App');
    return (
      <>
        <Navbar totalCount={totalCount}></Navbar>
        <Habits habits={this.state.habits} onAdd={this.handleAdd} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} onReset={this.handleReset} />
      </>
    );
  }
}

export default App;
