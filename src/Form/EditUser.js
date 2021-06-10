import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap"
import { GlobalState } from '../Context/GlobalState';

export const EditUser = (props) => {
    const [selectedUser,setSelectedUser] = useState({
        id:'',
        name:'',
        email:''
    });
    const {users,editUser} = useContext(GlobalState);
    const history =useHistory();
    const currentUserId = props.computedMatch.params.id; 

    useEffect(()=>{
        const userId =currentUserId;
        const selectedUser  = users.find(user => user.id === +userId) 
       
        setSelectedUser(selectedUser)
    },[currentUserId,users])

    const onSubmit = (e)=> {
        e.preventDefault();
        editUser(selectedUser)

        history.push('/');
    }

    const onChangeName = (e) => {
        setSelectedUser({...selectedUser,[e.target.name]: e.target.value})
    }
    const onChangeEmail = (e) => {
        setSelectedUser({...selectedUser,[e.target.name]: e.target.value})
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label> 
                <Input type="text" name="name" value={selectedUser.name} onChange={onChangeName} placeholder="Enter Name"></Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="text" name="email" value={selectedUser.email} onChange={onChangeEmail} />
            </FormGroup>
            <Button type="submit">Update</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
