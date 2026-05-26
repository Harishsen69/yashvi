import React from 'react'
import { Form, Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()

  const handlelogin = (value) => {
    if (value.username === "Dwarika" && value.password === '123') {
      navigate('/dashboard')
      alert("Login Success")
      localStorage.setItem('loggedIn','true')
    }
    else {
      alert("invalid username or password")
    }
  }
  return (
    <div>
      <Form onFinish={handlelogin} style={{ width: '200px' }}>
        <Form.Item name="username">
          <Input></Input>
        </Form.Item>
        <Form.Item name="password">
          <Input></Input>
        </Form.Item>
        <Button htmlType='submit'>Login</Button>
      </Form>
    </div>
  )
}

export default Login