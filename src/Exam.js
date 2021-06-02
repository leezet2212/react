import React from 'react'

function ListenList(props){
    const value=props.value;
    return (
        <li>{value}</li>
    )
}
export default function Exam(props) {
    const number = props.number
    const listItem = number.map((number1)=> <ListenList key={number1.toString()} value={number1}/>);
    return (
        <ul>{listItem}</ul>
    )
}

