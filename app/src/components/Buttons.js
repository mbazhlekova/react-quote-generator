import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Buttons = (props) => {
  return (
    <div>
      <RaisedButton
        className="buttons--margin"
        label="Get quote"
        primary={true}
        onClick={this.getQuote}
      />
      <RaisedButton
        label="Tweet"
        href={`https://twitter.com/intent/tweet?text=${props.quoteText} -${props.quoteAuthor}`}
        target="_blank"
        secondary={true}
      />
    </div>
  )
}
 
export default Buttons;

