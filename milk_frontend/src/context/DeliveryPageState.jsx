import React from 'react';
import { useState } from 'react';
import delivery_page_context from './DeliveryPageContext'

const DeliveryPageState = (props) => {
  const tableHead = [
    ,
    'Delivery_id' ,
    'Subscriber_id',
    'Name',
    'Quantity',
    'Status',
    'Extra'
  ];

  const OriginalRows = [
    {
      'Delivery_id' : '1001',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },

    {
      'Delivery_id' : '1002',
      'Subscriber_id' : '5001',
      'Name' : 'Sushant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },
    {
      'Delivery_id' : '1003',
      'Subscriber_id' : '5001',
      'Name' : 'Ranjan Mali',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },

    {
      'Delivery_id' : '1004',
      'Subscriber_id' : '5001',
      'Name' : 'Virat Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },

    {
      'Delivery_id' : '1005',
      'Subscriber_id' : '5001',
      'Name' : 'Manglu Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },

    {
      'Delivery_id' : '1006',
      'Subscriber_id' : '5001',
      'Name' : 'Goku Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },
    {
      'Delivery_id' : '1008',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },
    {
      'Delivery_id' : '1008',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },
    {
      'Delivery_id' : '1008',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },
    {
      'Delivery_id' : '1008',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },
    {
      'Delivery_id' : '1008',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },
    {
      'Delivery_id' : '1008',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },

    {
      'Delivery_id' : '1008',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },

    {
      'Delivery_id' : '1008',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
    },

    {
      'Delivery_id' : '1008',
      'Subscriber_id' : '5001',
      'Name' : 'Vedant Bhat',
      'Quantity' : '2',
      'Status' : 'pending',
      'Extra' : '0'
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

  const unmarkAllDeliveries = () => {
     setRows(rows.map((row) => {
      return {
        ...row ,
        'Status':'Pending'
      }
    }))
  }

  const editDelivery = (item) => {
    setRows(rows.map((row) => {

      if(item.Delivery_id == row.Delivery_id){
        return {
        ...item,
        'Quantity' : item.Quantity
        }
      }
      return row
    }))
  }

  return (
    <delivery_page_context.Provider value={{tableHead , rows , handleSearch , markAllDeliveries , editDelivery , unmarkAllDeliveries}}>
        {props.children}
    </delivery_page_context.Provider>
  )
}

export default DeliveryPageState;
