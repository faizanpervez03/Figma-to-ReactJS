import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'

const API = 'http://localhost:3000/api'

const AdminOrders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState('all')
  const [detailOrder, setDetailOrder] = useState(null)

  useEffect(() => { load() }, [])

  async function load() {
    setLoading(true)
    const res = await fetch(`${API}/orders`)
    const data = await res.json()
    setOrders(data)
    setLoading(false)
  }

  async function updateStatus(id, status) {
    await fetch(`${API}/orders/${id}/status`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) })
    load()
  }

  async function deleteOrder(id) {
    if (!confirm('Delete this order?')) return
    await fetch(`${API}/orders/${id}`, { method: 'DELETE' })
    load()
  }

  const filtered = filterStatus === 'all' ? orders : orders.filter(o => (o.status || 'pending') === filterStatus)

  const getStatusClass = (status) => {
    const s = status || 'pending'
    return `status-${s}`
  }

  return (
    <AdminLayout>
      <div className="page-container">
        <div className="page-header">
          <div className="page-title">
            <h2>Orders</h2>
            <div className="page-subtitle">View and manage customer orders</div>
          </div>
          <div className="page-actions">
            <select className="search-box" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button className="btn btn-secondary" onClick={() => load()}>Refresh</button>
          </div>
        </div>

        {loading ? <div>Loading...</div> : (
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan="6" style={{ textAlign: 'center', padding: 20, color: '#718096' }}>No orders found</td></tr>
                ) : filtered.map(o => {
                  const customer = o.shippingAddress ? `${o.shippingAddress.firstName || ''} ${o.shippingAddress.lastName || ''}`.trim() : (o.customerEmail || 'Unknown')
                  const total = o.totalPrice || o.total || 0
                  const date = o.createdAt ? new Date(o.createdAt).toLocaleDateString() : (o.date ? new Date(o.date).toLocaleDateString() : '-')
                  return (
                    <tr key={o.id}>
                      <td><strong>{o.id}</strong></td>
                      <td>{customer}</td>
                      <td>Rs {Number(total).toFixed(2)}</td>
                      <td><span className={`status-badge ${getStatusClass(o.status)}`}>{o.status || 'pending'}</span></td>
                      <td>{date}</td>
                      <td>
                        <div className="actions-group">
                          <button className="btn btn-secondary" onClick={() => setDetailOrder(o)}>View</button>
                          <select className="text-input" style={{ padding: '4px 6px', fontSize: '12px' }} value={o.status || 'pending'} onChange={e => updateStatus(o.id, e.target.value)}>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                          <button className="btn btn-danger" onClick={() => deleteOrder(o.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {detailOrder && (
          <div style={modalOverlayStyle} onClick={() => setDetailOrder(null)}>
            <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
              <div style={modalHeaderStyle}>
                <h2>Order Details</h2>
                <button onClick={() => setDetailOrder(null)} style={closeButtonStyle}>✕</button>
              </div>
              <div style={modalBodyStyle}>
                <div style={{ marginBottom: 20 }}>
                  <h3>Order Information</h3>
                  <p><strong>Order ID:</strong> {detailOrder.id}</p>
                  <p><strong>Status:</strong> <span className={`status-badge ${getStatusClass(detailOrder.status)}`}>{detailOrder.status || 'pending'}</span></p>
                  <p><strong>Date:</strong> {detailOrder.createdAt ? new Date(detailOrder.createdAt).toLocaleString() : '-'}</p>
                  <p><strong>Total:</strong> Rs {Number(detailOrder.totalPrice || 0).toFixed(2)}</p>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <h3>Customer Information</h3>
                  {detailOrder.shippingAddress && (
                    <>
                      <p><strong>Name:</strong> {detailOrder.shippingAddress.firstName} {detailOrder.shippingAddress.lastName}</p>
                      <p><strong>Email:</strong> {detailOrder.shippingAddress.email}</p>
                      <p><strong>Phone:</strong> {detailOrder.shippingAddress.phone || '-'}</p>
                      <p><strong>Address:</strong> {detailOrder.shippingAddress.address}</p>
                      <p><strong>City:</strong> {detailOrder.shippingAddress.city}</p>
                      <p><strong>Country:</strong> {detailOrder.shippingAddress.country}</p>
                      <p><strong>Postal Code:</strong> {detailOrder.shippingAddress.postalCode || '-'}</p>
                      <p><strong>Company:</strong> {detailOrder.shippingAddress.companyName || '-'}</p>
                      <p><strong>Shipping Method:</strong> {detailOrder.shippingAddress.shippingMethod || '-'}</p>
                    </>
                  )}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <h3>Order Items</h3>
                  {detailOrder.items && detailOrder.items.length > 0 ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid #ddd' }}>
                          <th style={{ textAlign: 'left', padding: '8px' }}>Product</th>
                          <th style={{ textAlign: 'center', padding: '8px' }}>Qty</th>
                          <th style={{ textAlign: 'right', padding: '8px' }}>Price</th>
                          <th style={{ textAlign: 'right', padding: '8px' }}>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {detailOrder.items.map((item, idx) => (
                          <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                            <td style={{ padding: '8px' }}>{item.title || item.name || 'Unknown'}</td>
                            <td style={{ textAlign: 'center', padding: '8px' }}>{item.quantity}</td>
                            <td style={{ textAlign: 'right', padding: '8px' }}>Rs {Number(item.price).toFixed(2)}</td>
                            <td style={{ textAlign: 'right', padding: '8px' }}>Rs {Number(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No items</p>
                  )}
                </div>

                <div style={{ textAlign: 'right' }}>
                  <button className="btn btn-secondary" onClick={() => setDetailOrder(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
}

const modalContentStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  maxWidth: '700px',
  width: '90%',
  maxHeight: '80vh',
  overflow: 'auto',
}

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  borderBottom: '1px solid #eee',
  backgroundColor: '#F4F4FC',
}

const closeButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#666',
}

const modalBodyStyle = {
  padding: '20px',
}

export default AdminOrders
