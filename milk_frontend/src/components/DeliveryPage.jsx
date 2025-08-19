import React, { useContext, useState } from 'react'
import delivery_page_context from '../context/DeliveryPageContext'
import { MdModeEditOutline } from "react-icons/md";

const DeliveryPage = () => {

    const context = useContext(delivery_page_context)
    const { tableHead, rows, handleSearch, markAllDeliveries, editDelivery , unmarkAllDeliveries} = context;
    let [deliveryButtonChange, setDeliveryButtonChange] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editRow, setEditRow] = useState(null);

    const onSearch = (e) => {
        handleSearch(e);
    };

    const handleMarkAllDeliveries = () => {
        if (!deliveryButtonChange) {
            unmarkAllDeliveries();
            setDeliveryButtonChange(!deliveryButtonChange)
        }
        else {
            markAllDeliveries();
            setDeliveryButtonChange(!deliveryButtonChange)
            deliveryButtonChange = !deliveryButtonChange
        }

    };

    const handleClick = (row) => {
        setEditRow(row);
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
        setEditRow(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditRow((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {

        editDelivery(editRow)
        setIsModalOpen(false);
    };

    return (
        <div style={{ margin: 'auto' }}>
            <div className="deliveryMain" style={{ position: 'relative' }}>
                <div className="deliveryPageHeader">
                    <span style={{ fontFamily: 'monospace', fontWeight: 'bolder', fontSize: '2em', marginLeft: "1em" }}>
                        Today's Deliveries
                    </span>
                    <input type="text" placeholder='enter' onChange={onSearch} />
                    <button onClick={handleMarkAllDeliveries} style={{ 'backgroundColor': deliveryButtonChange ? 'greenyellow' : 'red'}}>{deliveryButtonChange ? 'Mark All deliveries' : 'Unmark All deliveries'}</button>
                </div>

                <div>
                    <table className='deliveryPageTable'>
                        <thead>
                            <tr>
                                {tableHead.map((item, idx) => (
                                    <th key={idx}>{item}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className='deliveryPageTableBody'>
                            {rows.map((row, idx) => (
                                <tr key={idx}>
                                    <td>{row.Delivery_id}</td>
                                    <td>{row.Subscriber_id}</td>
                                    <td>{row.Name}</td>
                                    <td>{row.Quantity} ltrs</td>
                                    <td>{row.Status}</td>
                                    <td>{row.Extra}</td>
                                    <td><MdModeEditOutline onClick={() => handleClick(row)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modalOverlay">
                    <div className="modalContent">
                        <h2>Edit Delivery</h2>
                        <label>
                            Name:
                            <input name="Name" value={editRow?.Name || ""} onChange={handleChange} />
                        </label>
                        <label>
                            Quantity:
                            <input name="Quantity" value={editRow?.Quantity || ""} onChange={handleChange} />
                        </label>
                        <label>
                            Status:
                            <input name="Status" value={editRow?.Status || ""} onChange={handleChange} />
                        </label>
                        <label>
                            Extra:
                            <input name="Extra" value={editRow?.Extra || ""} onChange={handleChange} />
                        </label>

                        <div style={{ marginTop: "1em" }}>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={handleClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DeliveryPage;
