import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Quote from './components/Quote';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      quoteAPI: 'http://localhost:8080/api/quote',
      quote: {},
    }
    this.getQuote();
  }

  getQuote = async () => {
    const res = await fetch(this.state.quoteAPI);
    const quote = await res.json();
    if (quote) {
      this.setState({ quote: quote[0] });
    }
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="app">
        <Quote quoteText={this.state.quote.quoteText} quoteAuthor={this.state.quote.quoteAuthor}/>
        <RaisedButton
          label="Get quote"
          primary={true}
          onClick={this.getQuote}
        />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
