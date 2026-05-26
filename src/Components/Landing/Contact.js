import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'antd'

function Contact() {
  const location = useLocation()
  console.log(location.state)
  const data = [
    { id: 1, name: 'RealMe', sucat: 'Mobile' },
    { id: 2, name: 'Vivo', sucat: 'Mobile' },
    { id: 3, name: 'Oppo', sucat: 'Mobile' },
    { id: 4, name: 'Amul', sucat: 'milk' },
    { id: 5, name: 'Nandani', sucat: 'milk' },
    { id: 6, name: 'Adidas', sucat: 'shoes' },
    { id: 7, name: 'campus', sucat: 'shoes' },
    { id: 8, name: 'Soni', sucat: 'TV' },
    { id: 9, name: 'moong', sucat: 'pulse' },
    { id: 10, name: 'shirt', sucat: 'cloths' },
    { id: 11, name: 'Sonata', sucat: 'watch' },
    { id: 12, name: 'nack', sucat: 'nackless' },
  ]

  const filterData = data.filter(i => (i.sucat === location.state))
  return (
    <div style={{ display: 'flex', margin: '30px', justifyContent: 'space-evenly' }}>
      {filterData.map(i => (
        <Card style={{ width: '30%', textAlign: 'center' }}>
          <h2>{i.name}</h2>
          <p style={{ fontWeight: '900' }}>{i.sucat}</p>
        </Card>
      ))}

    </div>
  )
}

export default Contact