import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPackage, FiShoppingCart } from 'react-icons/fi'
import AdminLayout from './AdminLayout'

const API = 'http://localhost:3000/api'

const AdminDashboard = () => {
  const [stats, setStats] = useState({ products: 0, orders: 0, totalRevenue: 0 })

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    try {
      const productsRes = await fetch(`${API}/products`)
      const ordersRes = await fetch(`${API}/orders`)
      const products = await productsRes.json()
      const orders = await ordersRes.json()
      const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0)
      setStats({ products: products.length, orders: orders.length, totalRevenue })
    } catch (err) {
      console.error('Failed to fetch stats:', err)
    }
  }

  return (
    <AdminLayout>
      <div className="page-container">
        <div className="page-header">
          <div className="page-title">
            <h2>Dashboard</h2>
            <div className="page-subtitle">Welcome back! Here's your business overview</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
          <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: 20, borderRadius: 8 }}>
            <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 8 }}>Total Products</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>{stats.products}</div>
            <div style={{ fontSize: 12, marginTop: 8, opacity: 0.8 }}>Active items in catalog</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#fff', padding: 20, borderRadius: 8 }}>
            <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 8 }}>Total Orders</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>{stats.orders}</div>
            <div style={{ fontSize: 12, marginTop: 8, opacity: 0.8 }}>Customer orders</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: '#fff', padding: 20, borderRadius: 8 }}>
            <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 8 }}>Revenue</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>${stats.totalRevenue.toFixed(2)}</div>
            <div style={{ fontSize: 12, marginTop: 8, opacity: 0.8 }}>Total sales</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          <Link to="/admin/products" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', padding: 20, borderRadius: 8, textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', hover: { boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } }}>
              <div style={{ fontSize: 32, marginBottom: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FiPackage size={32} /></div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#2d3748', marginBottom: 4 }}>Products</div>
              <div style={{ fontSize: 12, color: '#718096' }}>Manage catalog</div>
            </div>
          </Link>
          <Link to="/admin/orders" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', padding: 20, borderRadius: 8, textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
              <div style={{ fontSize: 32, marginBottom: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FiShoppingCart size={32} /></div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#2d3748', marginBottom: 4 }}>Orders</div>
              <div style={{ fontSize: 12, color: '#718096' }}>View orders</div>
            </div>
          </Link>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard
