import React, { useContext } from 'react'
import {GlobalState} from '../Context/GlobalState'
import { Link } from 'react-router-dom'
import {
    ListGroup,
    ListGroupItem,
    Button
}from 'reactstrap'
export const UserList = () => {
    const {users, removeUser} = useContext(GlobalState)

    console.log(users)
    return (
        <ListGroup>
            {users.length>0 ? (
                <>
                {users.map(user=>(
                    <ListGroupItem key={user.id} className="d-flex">
                        <strong>{user.name}</strong>
                        <p>{user.email}</p>
                        <div className="ml-auto">
                            <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>Edit</Link>
                            <Button onClick={()=>removeUser(user.id)}>Delete </Button>
                        </div>
                    </ListGroupItem>
                    ))}
                </>
            )
            :(
                <h4>No User</h4>
            )}
            
        </ListGroup>
    )
}
