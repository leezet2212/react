import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import {
        Form,
        FormGroup,
        Label,
        Input,
        Button
} from "reactstrap"
import { GlobalState } from '../Context/GlobalState'

export const AddUser = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const {addUser} = useContext(GlobalState);
    const history= useHistory();

    const onSubmit=()=>{
        const newUser= {
            id:uuid(),
            name:name,
            email:email
        }
        console.log(newUser)
        addUser(newUser);

        history.push('/')
    }
    const onChangeName = (e) => {
        setName(e.target.value);
    } 
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={onChangeName} placeholder="Enter Name"></Input>
            </FormGroup>
            <FormGroup>
                <Label>Gmail</Label>
                <Input type="text" value={email} onChange={onChangeEmail} placeholder="Enter Gmail"></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
