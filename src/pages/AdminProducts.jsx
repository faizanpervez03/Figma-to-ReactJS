import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminLayout from './AdminLayout'

const API = 'http://localhost:3000/api'

const AdminProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  async function load() {
    setLoading(true)
    const res = await fetch(`${API}/products`)
    const data = await res.json()
    setProducts(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function handleDelete(id) {
    if (!confirm('Delete this product?')) return
    await fetch(`${API}/products/${id}`, { method: 'DELETE' })
    load()
  }

  const filtered = products.filter(p => (p.name || '').toLowerCase().includes(query.toLowerCase()))

  return (
    <AdminLayout>
      <div className="page-container">
        <div className="page-header">
          <div className="page-title">
            <h2>Products</h2>
            <div className="page-subtitle">Manage your product catalog — add, edit or remove items</div>
          </div>
          <div className="page-actions">
            <input className="search-box" placeholder="Search products..." value={query} onChange={e => setQuery(e.target.value)} />
            <button className="btn btn-secondary" onClick={() => load()}>Refresh</button>
            <button className="btn btn-primary" onClick={() => navigate('/admin/products/new')}>+ Add Product</button>
          </div>
        </div>

        {loading ? <div>Loading...</div> : (
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan="5" style={{ textAlign: 'center', padding: 20, color: '#718096' }}>No products found</td></tr>
                ) : filtered.map(p => (
                  <tr key={p.id}>
                    <td>{p.image ? <img className="thumbnail" src={`http://localhost:3000${p.image}`} alt="" /> : '-'}</td>
                    <td><strong>{p.name}</strong></td>
                    <td>Rs {Number(p.price).toFixed(2)}</td>
                    <td>{p.countInStock}</td>
                    <td>
                      <div className="actions-group">
                        <Link to={`/admin/products/${p.id}/edit`}><button className="btn btn-secondary">Edit</button></Link>
                        <button className="btn btn-danger" onClick={() => handleDelete(p.id)}>Delete</button>
                      </div>
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

export default AdminProducts
