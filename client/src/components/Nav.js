import React from 'react';
import {useHistory,Link,withRouter} from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {isLogin} from './Routes/__helper'

 
const NavBar = () => {
 
        let val = isLogin();
     

const history = useHistory()
const Navigate=()=>{
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    if (!localStorage.getItem('token')) {
       history.push('/')  
    }
  
}


const authLinks =(
 

<Link className="btn btn-danger ma-3" to="/" onClick={Navigate}>Logout</Link>

 

)

const customLinks =(
 
  <Link className="btn btn-primary ma-3" to="/register">Register</Link>

)




  



    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href="/" className="mr-auto">React-Node-Login</NavbarBrand>
                <Nav className="ml-auto" navbar>
 <NavItem>
 {
        !val&&customLinks
    }
    {
          
        val&&authLinks
           
              
    }
 
            
 
            </NavItem>
 </Nav>

                

            </Navbar>
        </div>
    );
}

export default withRouter(NavBar);