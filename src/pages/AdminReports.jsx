import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'

const API = 'http://localhost:3000/api'

const AdminReports = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    totalCustomers: 0,
    avgOrderValue: 0,
    ordersByStatus: {},
    topProducts: [],
    revenueByMonth: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadReports()
  }, [])

  async function loadReports() {
    setLoading(true)
    try {
      const productsRes = await fetch(`${API}/products`)
      const ordersRes = await fetch(`${API}/orders`)
      const products = await productsRes.json()
      const orders = await ordersRes.json()

      // Calculate stats
      const totalOrders = orders.length
      const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0)
      const totalProducts = products.length
      
      // Get unique customers
      const customers = new Set()
      orders.forEach(o => {
        if (o.user?.email) customers.add(o.user.email)
      })
      const totalCustomers = customers.size

      const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0

      // Orders by status
      const ordersByStatus = {}
      orders.forEach(o => {
        const status = o.status || 'pending'
        ordersByStatus[status] = (ordersByStatus[status] || 0) + 1
      })

      // Revenue by month (simulated)
      const revenueByMonth = []
      const now = new Date()
      for (let i = 5; i >= 0; i--) {
        const month = new Date(now.getFullYear(), now.getMonth() - i, 1)
        const monthStr = month.toLocaleDateString('en-US', { month: 'short' })
        revenueByMonth.push({ month: monthStr, revenue: Math.floor(Math.random() * totalRevenue) })
      }

      setStats({
        totalOrders,
        totalRevenue,
        totalProducts,
        totalCustomers,
        avgOrderValue,
        ordersByStatus,
        topProducts: products.slice(0, 5),
        revenueByMonth
      })
    } catch (err) {
      console.error('Failed to load reports:', err)
    }
    setLoading(false)
  }

  const getStatusColor = (status) => {
    const colors = {
      pending: '#fef08a',
      processing: '#dbeafe',
      shipped: '#dbeafe',
      delivered: '#dcfce7',
      cancelled: '#fee2e2'
    }
    return colors[status] || '#e5e7eb'
  }

  return (
    <AdminLayout>
      <div className="page-container">
        <div className="page-header">
          <div className="page-title">
            <h2>Reports & Analytics</h2>
            <div className="page-subtitle">Business performance and insights</div>
          </div>
          <div className="page-actions">
            <button className="btn btn-secondary" onClick={() => loadReports()}>Refresh</button>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 40, color: '#718096' }}>Loading reports...</div>
        ) : (
          <>
            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 24 }}>
              <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: 20, borderRadius: 8 }}>
                <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 8 }}>Total Orders</div>
                <div style={{ fontSize: 36, fontWeight: 700 }}>{stats.totalOrders}</div>
                <div style={{ fontSize: 11, marginTop: 8, opacity: 0.8 }}>All time orders</div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#fff', padding: 20, borderRadius: 8 }}>
                <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 8 }}>Total Revenue</div>
                <div style={{ fontSize: 36, fontWeight: 700 }}>Rs {stats.totalRevenue.toFixed(0)}</div>
                <div style={{ fontSize: 11, marginTop: 8, opacity: 0.8 }}>Gross sales</div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: '#fff', padding: 20, borderRadius: 8 }}>
                <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 8 }}>Avg Order Value</div>
                <div style={{ fontSize: 36, fontWeight: 700 }}>Rs {stats.avgOrderValue.toFixed(2)}</div>
                <div style={{ fontSize: 11, marginTop: 8, opacity: 0.8 }}>Per order</div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: '#fff', padding: 20, borderRadius: 8 }}>
                <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 8 }}>Customers</div>
                <div style={{ fontSize: 36, fontWeight: 700 }}>{stats.totalCustomers}</div>
                <div style={{ fontSize: 11, marginTop: 8, opacity: 0.8 }}>Unique buyers</div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: '#fff', padding: 20, borderRadius: 8 }}>
                <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 8 }}>Products</div>
                <div style={{ fontSize: 36, fontWeight: 700 }}>{stats.totalProducts}</div>
                <div style={{ fontSize: 11, marginTop: 8, opacity: 0.8 }}>In catalog</div>
              </div>
            </div>

            {/* Orders by Status */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 20 }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: 16, fontWeight: 600, color: '#2d3748' }}>Orders by Status</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {Object.entries(stats.ordersByStatus).map(([status, count]) => (
                    <div key={status} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, background: '#f7fafc', borderRadius: 6 }}>
                      <div>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#2d3748', textTransform: 'capitalize' }}>{status}</span>
                      </div>
                      <span style={{ background: getStatusColor(status), color: '#000', padding: '4px 10px', borderRadius: 4, fontSize: 13, fontWeight: 600 }}>
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue by Month */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 20 }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: 16, fontWeight: 600, color: '#2d3748' }}>Revenue Trend</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {stats.revenueByMonth.map((item, idx) => {
                    const maxRevenue = Math.max(...stats.revenueByMonth.map(m => m.revenue))
                    const percentage = (item.revenue / maxRevenue) * 100
                    return (
                      <div key={idx}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: '#2d3748' }}>{item.month}</span>
                          <span style={{ fontSize: 12, color: '#718096' }}>Rs {item.revenue}</span>
                        </div>
                        <div style={{ background: '#e2e8f0', height: 6, borderRadius: 3, overflow: 'hidden' }}>
                          <div style={{ background: 'linear-gradient(90deg, #667eea, #764ba2)', height: '100%', width: `${percentage}%` }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Top Products */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 20 }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: 16, fontWeight: 600, color: '#2d3748' }}>Top Products</h3>
              <div className="table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.topProducts.map(p => (
                      <tr key={p.id}>
                        <td><strong>{p.name}</strong></td>
                        <td>Rs {Number(p.price).toFixed(2)}</td>
                        <td>{p.countInStock}</td>
                        <td>{p.category || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  )
}

export default AdminReports
