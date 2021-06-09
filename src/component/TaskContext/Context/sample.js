import React from 'react'
import Them from './them'

const sample = () => (
    <Them.Provider value='dark'>
        <Them.Consumer>
            {theme => <div>our them is : {theme}</div>}
        </Them.Consumer>
    </Them.Provider>
)
export default sample