import React, { PureComponent } from 'react';

export default class Navbar extends PureComponent {
  render() {
    const { totalCount } = this.props;
    console.log('nav');
    return (
      <div className='navbar'>
        <i className='navbar-logo fas fa-leaf'></i>
        <span>Habit Tracker</span>
        <span className='navbar-logo'>{totalCount}</span>
      </div>
    );
  }
}
