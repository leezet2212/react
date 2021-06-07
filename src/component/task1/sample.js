import React from 'react';
import Theme from './them.js';
import ThemedButton from './ThemedButton.js';


const Sample = ()=> (
    <Theme.Provider value='dark'>
        <ThemedButton/>
    </Theme.Provider>
);

export default Sample;