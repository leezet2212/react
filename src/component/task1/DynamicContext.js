import React, { Component } from 'react'
import ThemeContext from './them';
import ThemedButton from './ThemedButton';


export default class DynamicContext extends Component {
    constructor(props){
        super(props);
        this.state={
            theme:'dark',
        };
    }   

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <ThemedButton/>
            </ThemeContext.Provider>
        )
    }
}
