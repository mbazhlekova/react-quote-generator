import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      quoteAPI: 'http://localhost:8080/api/quote',
      quote: {}
    }
    this.getQuote();
  }

  getQuote = async () => {
    const res = await fetch(this.state.quoteAPI);
    const quote = await res.json();
    if (quote) {
      this.setState({ quote });
      console.log(this.state.quote[0].quoteText);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my quote generator</h1>
        </header>
        <p className="App-intro">
          { !Object.keys(this.state.quote).length ? "Press button below to get a quote" : this.state.quote[0].quoteText }
        </p>
        <p className="App-intro">
          { !Object.keys(this.state.quote).length ? '' : '- ' + this.state.quote[0].quoteAuthor }
        </p>
        <button
          onClick={this.getQuote}
        >Get quote</button>
      </div>
    );
  }
}

export default App;
