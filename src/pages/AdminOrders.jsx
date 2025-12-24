import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'

const API = 'http://localhost:3000/api'

const AdminOrders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState('all')

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
                ) : filtered.map(o => (
                  <tr key={o.id}>
                    <td><strong>{o.id}</strong></td>
                    <td>{o.user?.email || o.user?.name || 'Unknown'}</td>
                    <td>${o.total || 0}</td>
                    <td><span className={`status-badge ${getStatusClass(o.status)}`}>{o.status || 'pending'}</span></td>
                    <td>{o.date ? new Date(o.date).toLocaleDateString() : '-'}</td>
                    <td>
                      <select className="text-input" style={{ padding: '4px 6px', fontSize: '12px' }} value={o.status || 'pending'} onChange={e => updateStatus(o.id, e.target.value)}>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default AdminOrders
