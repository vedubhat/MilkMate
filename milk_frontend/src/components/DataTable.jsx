import React, { useContext, useEffect, useState } from 'react'

import data_table_context from '../context/DataTableContext'

const DataTable = () => {
    const [page, setPage] = useState(1);
    const context = useContext(data_table_context)

    const { rows, handleNextPage, handlePrevPage } = context



    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);

        handleNextPage(page + 1);
    }

    const handlePrev = () => {
        setPage((prevPage) => prevPage - 1);
        handlePrevPage(page - 1);
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '', width: '70vw', margin: 'auto' }}>
            <span style={{ textAlign: 'start', fontWeight: 'bolder', fontSize: '1.5em', marginLeft: '2rem' }}>Subscribers</span>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>status</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        rows.map((row) => {
                            return <tr>
                                <td>{row.username}</td>
                                <td>{row.email}</td>
                                <td>{row.status}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <div className="tableFooter" style={{ backgroundColor: "#e9ecef", width: "70vw", margin: 'auto', height: '5vh', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <p>{`page ${page} out of ${2}`}</p>
                <div style={{display : 'flex', gap : '0.5em'}}>
                    <button onClick={handlePrev} disabled = {page <= 1 ? true : false}>Previous</button>
                    <button onClick={handleNext} disabled = {page >= 2 ? true : false}>Next</button>
                </div>

            </div>


        </div>
    )
}

export default DataTable
