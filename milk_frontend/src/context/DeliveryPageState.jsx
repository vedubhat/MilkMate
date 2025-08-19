import React from 'react';
import { useState } from 'react';
import delivery_page_context from './DeliveryPageContext'
// import { MdModeEditOutline } from "react-icons/md";
const DeliveryPageState = (props) => {
  const tableHead = [
    ,
    'Delivery_id' ,
    'Subscriber_id',
    'Name',
    'Quantity',
    'Status'
  ];

  const OriginalRows = [
    {
      'Delivery_id' : '1001',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending'
    },

    {
      'Delivery_id' : '1001',
      'Subscriber_id' : '5001',
      'Name' : 'Sushant Bhat',
      'Quantity' : '2',
      'Status' : 'pending'
    },
    {
      'Delivery_id' : '1001',
      'Subscriber_id' : '5001',
      'Name' : 'Ranjan Mali',
      'Quantity' : '2',
      'Status' : 'pending'
    },

    {
      'Delivery_id' : '1001',
      'Subscriber_id' : '5001',
      'Name' : 'Virat Bhat',
      'Quantity' : '2',
      'Status' : 'pending'
    },

    {
      'Delivery_id' : '1001',
      'Subscriber_id' : '5001',
      'Name' : 'Manglu Bhat',
      'Quantity' : '2',
      'Status' : 'pending'
    },

    {
      'Delivery_id' : '1001',
      'Subscriber_id' : '5001',
      'Name' : 'Goku Bhat',
      'Quantity' : '2',
      'Status' : 'pending'
    },
  ]
  const [rows , setRows] = useState(OriginalRows);

  const handleSearch = (e) => {
    
    const n = e.target.value;
    if(n.length > 1){
      const newRows = rows.filter((item) => {
        return ((item.Name).toLowerCase()).includes(n.toLowerCase())
      });
      setRows(newRows)
    }
    else{
      setRows(OriginalRows)
    } 
  }

  const markAllDeliveries = () => {
    
    
    setRows(rows.map((row) => {
      return {
        ...row ,
        'Status':'Delivered'
      }
    }))
   
    
  }

  return (
    <delivery_page_context.Provider value={{tableHead , rows , handleSearch , markAllDeliveries}}>
        {props.children}
    </delivery_page_context.Provider>
  )
}

export default DeliveryPageState;
