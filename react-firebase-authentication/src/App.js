import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className='app'>

        <header>
            <div className='wrapper'>
              <h1>Sign In</h1>
            </div>
        </header>

        <div className='container'>
          <section className='add-item'>
              <form>
                <input type="text" name="username" placeholder="Type a username" />
                <input type="text" name="password" placeholder="Type a password" />
                <button>Create Account</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>

    );
  }
}
export default App;
