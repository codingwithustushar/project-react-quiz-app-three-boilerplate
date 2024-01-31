import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2 className='quiz-heading'>Quiz App</h2>
        <Link to={'/quiz'}>
        <button className='play-button'>Play</button>
        </Link>
      </div>
    );
  }
}
