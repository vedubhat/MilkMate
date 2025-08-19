import React, { useContext } from 'react'
import delivery_page_context from '../context/DeliveryPageContext'
import { MdModeEditOutline } from "react-icons/md";

const DeliveryPage = () => {
    const context = useContext(delivery_page_context)
    const { tableHead, rows, handleSearch, markAllDeliveries } = context;

    const onSearch = (e) => {
        handleSearch(e);
    }

    const handleMarkAllDeliveries = () => {
        markAllDeliveries();
    }

    const handleClick = (row) => {
        console.log(row.Name);
    }


    return (
        <div style={{ margin: 'auto' }}>

            <div className="deliveryMain"  style={{position : 'relative'}}>
                <div className="deliveryPageHeader">
                    <span style={{ fontFamily: 'monospace', fontWeight: 'bolder', fontSize: '2em', marginLeft: "1em" }}>Today's Deliveries</span>
                    <input type="text" placeholder='enter' onChange={onSearch} />
                    <button onClick={handleMarkAllDeliveries}>Mark All deliveries</button>
                </div>

                <div style={{position  :'relative'}}>
                    <table className='deliveryPageTable'>
                        <thead>
                            <tr>

                                {
                                    tableHead.map((item) => {
                                        return <th>{item}</th>
                                    })
                                }
                            </tr>
                        </thead>

                        <tbody className='deliveryPageTableBody'>
                            {
                                rows.map((row) => {
                                    return <tr onClick={() => handleClick(row)}>
                                        <td>{row.Delivery_id}</td>
                                        <td>{row.Subscriber_id}</td>
                                        <td>{row.Name}</td>
                                        <td>{row.Quantity}ltrs</td>
                                        <td>{row.Status}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                   
                </div>

            </div>

        </div>
    )
}

export default DeliveryPage
