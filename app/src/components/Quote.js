import React from 'react';

const Quote = (props) => {
  return (
    <div className="app">
      <p className="app--quote-fadein">
        { props.quoteText }
      </p>
      <p className="App-intro">
        { `- ${props.quoteAuthor}` }
      </p>
    </div>
  )
}
 
export default Quote;