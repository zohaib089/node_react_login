import React from 'react'
import { Card, CardBody} from 'reactstrap';
const Greetings = (props) => {
    let username = localStorage.getItem('username')
    return (
        <div>
            <Card style={{marginTop:"15rem",marginLeft:"auto",marginRight:"auto",width:"34rem"}}>
              <CardBody>
              <h1 >Welcome {username}</h1>
              </CardBody>
            </Card>
            

        </div>
    )
}

export default Greetings
