// import React from 'react'
// import { useState } from 'react'
// import { Card, Form, Button, Input } from 'antd'
// function Home() {
//   const [data, setData] = useState([{ name: 'harish', role: 'developer' }, { name: 'vikas', role: 'manager' }])

//   function handleFinish(values) {
//     setData([...data,values])
//   }

//   return (
//     <div>
//       <Form onFinish={handleFinish}>
//         <Form.Item label="Name" name='name'>
//           <Input></Input>=
//         </Form.Item>
//         <Form.Item label="Role" name='role'>
//           <Input></Input>
//         </Form.Item>
//         <Button htmlType='submit'>submit</Button>
//       </Form>
//       {
//         data.map(i => (
//           <Card style={{ width: '200px' }} hoverable>
//             <h1>{i.name}</h1>
//             <p>{i.role}</p>
//           </Card>
//         ))
//       }
//     </div>
//   )
// }

// export default Home



// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function Home() {
//   const navigate = useNavigate()

//   function handleNavigate(user) {
//     navigate('/contact', { state: [user] })
//   }
//   const data = [
//     { name: 'sonu', class: 'mca', age: 27 },
//     { name: 'monu', class: 'bca', age: 26 },
//     { name: 'bhumi', class: 'bsc', age: 24 }
//   ]
//   return (
//     <div>
//       {data.map(i => (
//         <div>
//           <h1>{i.name}</h1>
//           <button onClick={() => handleNavigate(i)}>view more</button>
//         </div>
//       ))}

//     </div>
//   )
// }

// export default Home

import React from 'react'
import cat from './demo.jpeg';
import {Card} from 'antd';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate()

  const data = [
    { id: 1, category: 'electronic', image: cat },
    { id: 2, category: 'grocery', image: cat },
    { id: 3, category: 'fashion', image: cat }
  ]
  function handleClick(categories){
       navigate('/about',{state:categories})
  }
  return (
    <div style={{display:'flex',margin:'30px',justifyContent:'space-evenly'}}>
      {data.map(i => (
        <Card style={{width:'30%',textAlign:'center'}} onClick={()=>handleClick(i.category)}>
            <img src={i.image} style={{width:'100%'}}/>
            <p style={{fontWeight:'900'}}>{i.category}</p>
        </Card>
      ))}

    </div>
  )
}

export default Home