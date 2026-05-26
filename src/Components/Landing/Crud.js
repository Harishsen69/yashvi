// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Landing from './Components/Landing/Landing'
// import Home from './Components/Landing/Home';
// import About from './Components/Landing/About'
// import Contact from './Components/Landing/Contact'
// import Service from './Components/Landing/Services'
// import Login from './Components/Landing/Login';

// import Dashboard from './Components/Dashboard/Dashboard';
// import Attendance from './Components/Dashboard/Attendance'
// import Reports from './Components/Dashboard/Reports';
// import Salary from './Components/Dashboard/Salary';
// import Leave from './Components/Dashboard/Leave';
// import PrivateRoute from './Components/Auth/PrivateRoutes';
// import PublicRoute from './Components/Auth/PublicRoutes'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<PublicRoute><Landing /></PublicRoute>}>
//           <Route index element={<Home />}></Route>
//           <Route path='about' element={<About />}></Route>
//           <Route path='contact' element={<Contact />}></Route>
//           <Route path='service' element={<Service />}></Route>
//           <Route path='login' element={<Login />}></Route>
//         </Route>

//         <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
//           <Route index element={<Attendance />}></Route>
//           <Route path='leave' element={<Leave />}></Route>
//           <Route path='salary' element={<Salary />}></Route>
//           <Route path='reports' element={<Reports />}></Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


// import React from 'react'
// import { getData } from './Components/api';
// import { useState } from 'react';

// function App() {
//   const [data, setData] = useState([])

//   async function handleDataGet() {
//     const response = await getData()
//     setData(response)
//   }

//   return (
//     <div>
//       <button onClick={handleDataGet}>Get Data from backend</button>
//       {
//         data.map(i => (
//           <div>
//             <h1>{i.name}</h1>
//             <h2>{i.email}</h2>
//             <p>{i.contact}</p>
//             <p>{i.address}</p>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { Form, Input, Button } from 'antd';
// import {createUser} from './Components/api';

// function App() {
//   async function handleFinish(values){
//     const response=await createUser(values)
//   }
//   return (
//     <div>
//       <Form onFinish={handleFinish}>
//         <Form.Item label='Name' name='name'>
//           <Input />
//         </Form.Item>
//         <Form.Item label='Email' name='email'>
//           <Input />
//         </Form.Item>
//         <Form.Item label='Address' name='address'>
//           <Input />
//         </Form.Item>
//         <Form.Item label='Contact' name='contact'>
//           <Input />
//         </Form.Item>
//         <Form.Item label='Password' name='password'>
//           <Input />
//         </Form.Item>
//         <Button htmlType='submit'>Submit</Button>
//       </Form>
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'
// import { Form, Button, Input, Table } from 'antd';
// import { updateUser, getData } from './Components/api';

// function App() {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     GetDataFromBackend
//   })

//   const GetDataFromBackend = async () => {
//     const res = await getData()
//     setData(res)
//   }
//   const handleOk = (values) => {
//     console.log('kk')
//   }
//   const col = [
//     {
//       key: 1,
//       title: 'Name',
//       dataIndex: 'name'
//     },
//     {
//       key: 2,
//       title: 'Email',
//       dataIndex: 'email'
//     },
//     {
//       key: 3,
//       title: 'Contact',
//       dataIndex: 'contact'
//     },
//     {
//       key: 4,
//       title: 'Address',
//       dataIndex: 'address'
//     },
//     {
//       key: 5,
//       title: 'Password',
//       dataIndex: 'password'
//     }
//   ]
//   return (
//     <>
//       <div>
// <Form onFinish={handleOk}>
//   <Form.Item label='Name' name='name'>
//     <input></input>
//   </Form.Item>
//   <Form.Item label="Email" name='email'>
//     <input></input>
//   </Form.Item>
//   <Form.Item label='Address' name='address'>
//     <input></input>
//   </Form.Item>
//   <Form.Item label='Contact' name='contact'>
//     <input></input>
//   </Form.Item>
//   <Form.Item label='Password' name='password'>
//     <input></input>
//   </Form.Item>
//   <Button htmlType='submit'>submit</Button>
// </Form>
//       </div>
//       <Table columns={col} dataSource={data}></Table>
//     </>
//   )
// }

// export default App


import React from 'react'
import { Button, Table, Form, Input } from 'antd';
import { getData, createUser,updateUser,deleteUser } from './Components/api';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([])
  const [editID, setEditID] = useState(null)
  const [formset] = Form.useForm()

  useEffect(() => {
    getDataBackend()
  }, [])

  const getDataBackend = async () => {
    const response = await getData()
    setData(response)
  }
  const handleEdit = (value) => {
    formset.setFieldsValue(value)
    setEditID(value._id)
  }
   const handleDelete =async (value) => {
   const response = await deleteUser(value._id)
   getDataBackend()
  }
  const col = [
    {
      key: 1,
      title: 'Name',
      dataIndex: 'name'
    },
    {
      key: 2,
      title: 'Email',
      dataIndex: 'email'
    },
    {
      key: 3,
      title: 'Address',
      dataIndex: 'address'
    },
    {
      key: 4,
      title: 'Contact',
      dataIndex: 'contact'
    },
    {
      key: 4,
      title: 'Action',
      render: (_, i) => (
        <>
          <Button onClick={() => handleEdit(i)}>Edit</Button>
          <Button onClick={() => handleDelete(i)}>Delete</Button>
        </>
      )
    }
  ]

  const handleOk = async (val) => {
    formset.resetFields()
    if (!editID) {
      const response = await createUser(val)
      getDataBackend()
    }
    else {
      const response = await updateUser(editID,val)
      getDataBackend()
    }
  }
  return (
    <div>
      <Form onFinish={handleOk} style={{ width: '40%' }} form={formset}>
        <Form.Item label='Name' name='name'>
          <Input></Input>
        </Form.Item>
        <Form.Item label="Email" name='email'>
          <Input></Input>
        </Form.Item>
        <Form.Item label='Address' name='address'>
          <Input></Input>
        </Form.Item>
        <Form.Item label='Contact' name='contact'>
          <Input></Input>
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input></Input>
        </Form.Item>
        <Button htmlType='submit'>submit</Button>
      </Form>

      {/* <Button onClick={getDataBackend}>get Data From Backend</Button> */}
      <Table columns={col} dataSource={data}></Table>
    </div>
  )
}

export default App