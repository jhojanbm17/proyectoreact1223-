import itemList from '../ItemList';
import React, { useState } from 'react';
import Title from '../Title';

const gaseosas =[
  {id:1, image:"",Title:"postobon uva"},
  {id:2, image:".",Title:"postobon manzana"},
]
const jugosNaturales =[
  {id:1, image:".",Title:"uva"},
  {id:2, image:".",Title:"manzana"},
]
const pulpa =[
  {id:1, image:".",Title:"uva"},
  {id:2, image:".",Title:"manzana"},
]

export const itemListContainer = ({texto}) => {
const [data,setData] = useState([]);
  return (
    <>
    <Title/>
    <ItemList data={data} />
    </>
  )
}

export default itemListContainer