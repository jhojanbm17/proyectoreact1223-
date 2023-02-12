import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import React, { useState } from 'react';


export const ItemDetail =({data}) => {
  const[goToCart, setGoToCart]= useState(false);

  const onAdd = (quantity) =>{
   setGoToCart(true);
}

  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
        {data.title}
        </Card.Text>
          {
              goToCart
                  ? <link to='/cart'>Finalizar Compra</link>
                  : <ItemCount initial={3} stock={5} onAdd={onAdd}/>
            }
        
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemDetail;