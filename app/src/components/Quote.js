import React from 'react';

const Quote = (props) => {
  return (
    <div className="app">
      <blockquote>
        { props.quoteText }
      </blockquote>
      <blockquote>
        { `- ${props.quoteAuthor}` }
      </blockquote>
    </div>
  )
}
 
export default Quote;