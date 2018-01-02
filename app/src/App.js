import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

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
      <MuiThemeProvider>
      <div className="App">
        <p className="App-intro">
          { !Object.keys(this.state.quote).length ? "Press button below to get a quote" : this.state.quote[0].quoteText }
        </p>
        <p className="App-intro">
          { !Object.keys(this.state.quote).length ? '' : '- ' + this.state.quote[0].quoteAuthor }
        </p>
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
