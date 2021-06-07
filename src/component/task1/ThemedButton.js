import React from 'react';
import Theme from './them'

const ThemedButton =(props) => (
  <Theme.Consumer>
    {them =>  <button {...props}> button witl Them : {them}</button>}
  </Theme.Consumer>
)
export default ThemedButton;