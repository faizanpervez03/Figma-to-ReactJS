import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'

const API = 'http://localhost:3000/api'

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    loadCustomers()
  }, [])

  async function loadCustomers() {
    setLoading(true)
    try {
      const res = await fetch(`${API}/orders`)
      const orders = await res.json()
      
      // Extract unique customers from orders
      const customerMap = {}
      orders.forEach(order => {
        if (order.user) {
          const key = order.user.email || order.user.name
          if (!customerMap[key]) {
            customerMap[key] = {
              id: order.user.id || key,
              name: order.user.name || 'Unknown',
              email: order.user.email || 'N/A',
              phone: order.user.phone || '-',
              orderCount: 0,
              totalSpent: 0,
              lastOrder: null
            }
          }
          customerMap[key].orderCount += 1
          customerMap[key].totalSpent += order.total || 0
          if (!customerMap[key].lastOrder || new Date(order.date) > new Date(customerMap[key].lastOrder)) {
            customerMap[key].lastOrder = order.date
          }
        }
      })
      setCustomers(Object.values(customerMap))
    } catch (err) {
      console.error('Failed to load customers:', err)
    }
    setLoading(false)
  }

  const filtered = customers.filter(c => 
    (c.name || '').toLowerCase().includes(query.toLowerCase()) ||
    (c.email || '').toLowerCase().includes(query.toLowerCase())
  )

  return (
    <AdminLayout>
      <div className="page-container">
        <div className="page-header">
          <div className="page-title">
            <h2>Customers</h2>
            <div className="page-subtitle">Manage and view customer information</div>
          </div>
          <div className="page-actions">
            <input 
              className="search-box" 
              placeholder="Search by name or email..." 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
            />
            <button className="btn btn-secondary" onClick={() => loadCustomers()}>Refresh</button>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 40, color: '#718096' }}>Loading customers...</div>
        ) : (
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Orders</th>
                  <th>Total Spent</th>
                  <th>Last Order</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: 20, color: '#718096' }}>
                      No customers found
                    </td>
                  </tr>
                ) : (
                  filtered.map((customer, idx) => (
                    <tr key={idx}>
                      <td>
                        <strong>{customer.name}</strong>
                      </td>
                      <td>{customer.email}</td>
                      <td>{customer.phone}</td>
                      <td>
                        <span style={{ background: '#dbeafe', color: '#0c4a6e', padding: '4px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>
                          {customer.orderCount}
                        </span>
                      </td>
                      <td>${customer.totalSpent.toFixed(2)}</td>
                      <td>{customer.lastOrder ? new Date(customer.lastOrder).toLocaleDateString() : '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default AdminCustomers
