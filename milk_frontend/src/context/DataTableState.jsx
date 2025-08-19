
import React, { useEffect, useState } from 'react'
import data_table_context from './DataTableContext'
const Data_table_state = (props) => {

  
    let originalData = [
        {
            username: "Vedant",
            email: "vedusbat@gmail.com",
            status: "active"
        },
        {
            username: "Manglu",
            email: "manglu@gmail.com",
            status: "paused"
        },
        {
            username: "Vedant",
            email: "vedusbat@gmail.com",
            status: "paused"
        },
        {
            username: "Vedant",
            email: "vedusbat@gmail.com",
            status: "active"
        },
        {
            username: "Vedant",
            email: "vedusbat@gmail.com",
            status: "active"
        },
        {
            username: "Vedant",
            email: "vedusbat@gmail.com",
            status: "active"
        },
        {
            username: "Vedant",
            email: "vedusbat@gmail.com",
            status: "active"
        },

         {
            username: "Vedant",
            email: "vedusbat@gmail.com",
            status: "active"
        },
         {
            username: "Vedant",
            email: "vedusbat@gmail.com",
            status: "active"
        },
         {
            username: "Vedant",
            email: "vedusbat@gmail.com",
            status: "active"
        },
         {
            username: "RanjanMali",
            email: "ranjan@gmail.com",
            status: "paused"
        },
         {
            username: "Sushant",
            email: "sushbhat@gmail.com",
            status: "active"
        },

    ]

    const [rows , setRows] = useState([]);
    useEffect(() => {
       handleNextPage(1)
    },[]);


    const handleNextPage = (page) => {
       
        let start = (page - 1) * 7
        let end = start + 7
        setRows(() => originalData.slice(start, end));
    }

    const handlePrevPage = (page) => {
        let start = (page - 1) * 7
        let end = start + 7
        setRows(() => originalData.slice(start ,end));
    }

    return (
        <data_table_context.Provider value={{rows , handleNextPage , originalData , handlePrevPage}}>
            {props.children}
        </data_table_context.Provider>
    )
}

export default Data_table_state;
