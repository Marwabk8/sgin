import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'

function StoreCard ({store}) {

 

  return (
    <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>{store.name}</ListGroup.Item>
    <ListGroup.Item>{store.adresse}</ListGroup.Item>
    <ListGroup.Item>{store.tel}</ListGroup.Item>
    <Button variant="primary">Edit</Button>{' '}
    <Button variant="danger">Delete</Button>
  </ListGroup>
</Card>
  )
}

export default StoreCard
