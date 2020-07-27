import React, { Fragment, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Card, Button, Form, FormGroup, Input, Label, CardImg, CardBody, Alert } from 'reactstrap';
import axios from 'axios';
import image from '../../img/login.jpg'

const Login = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, seterror] = useState(null)
  const [nameError, setNameError] = useState(null)
  const [passwordError, setpasswordError] = useState(null)

  const { username, password } = formData;


  useEffect(() => {

  
      if (username.length > 0) {
        setNameError('')
      }
      if (password.length > 0) {
        setpasswordError('')
      }
    


  },[username.length,password.length])





  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    console.log("clicked")
    e.preventDefault();

    if (formData.username === '') {
      setNameError('Name can be Empty')
      return
    }

    if (formData.password === '') {
      setpasswordError('Password can be Empty')
      return
    }
    if (formData.password.length < 6) {
      setpasswordError('Password must be 6 digit long')
      return
    }



    axios.post('http://localhost:5000/api/login', formData).then(res => {
      let token = res.data.token
      localStorage.setItem('token',token)
      localStorage.setItem('username',res.data.username)
      if (token) {
        history.push('/welcome')
      }
   
    }).catch(err => {
      if (err) {
        seterror("Wrong Crendentials")
        window.setTimeout(() => {
          seterror('')
        }, 3000)
      }

    }
    )
  };

  return (
    <Fragment>
      {
        error ? <Alert isOpen={error !== ''} color="danger">
          {error}
        </Alert> : null
      }

      <Card style={{ marginLeft: "auto", marginRight: "auto", width: "40rem", marginTop: "9rem" }}>

        <CardImg top style={{
          height: "4rem",
        }} src={image} alt="Card image cap" />
        <h1 style={{ marginTop: "-4rem", color: "white", fontSize: "3rem", fontWeight: "bold", fontFamily: "italic" }}>Login</h1>
        <CardBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label style={{ float: "left" }} for="Username">Username</Label>
              <Input onChange={onChange} value={username} type="text" name="username" placeholder="Username" />

            </FormGroup>
            {
              nameError ? <small style={{ color: 'red', marginLeft: "-4rem" }}>{nameError}</small> : null
            }
            <FormGroup>
              <Label style={{ float: "left" }} for="Password">Password</Label>
              <Input onChange={onChange} value={password} type="password" name="password" placeholder="Password" />
            </FormGroup>
            {
              passwordError ? <small style={{ color: 'red', marginLeft: "-4rem" }}>{passwordError}</small> : null
            }
          </Form>
          <Button style={{
            float: "right"
          }} color="primary" outline size="lg" type="submit" onClick={onSubmit}>Login</Button>
        </CardBody>
      </Card>
    </Fragment>

  )
}

export default Login
