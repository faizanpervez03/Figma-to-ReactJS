import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminLayout from './AdminLayout'

const API = 'http://localhost:3000/api'

const AdminProductForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', price: '', description: '', category: '', countInStock: '' })
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  useEffect(() => {
    if (!id) return
    fetch(`${API}/products`).then(r => r.json()).then(list => {
      const p = list.find(x => x.id === id)
      if (p) {
        setForm({ name: p.name || '', price: p.price || '', description: p.description || '', category: p.category || '', countInStock: p.countInStock || 0 })
        if (p.image) setImagePreview(`http://localhost:3000${p.image}`)
      }
    })
  }, [id])

  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData()
    fd.append('name', form.name)
    fd.append('price', form.price)
    fd.append('description', form.description)
    fd.append('category', form.category)
    fd.append('countInStock', form.countInStock)
    if (imageFile) fd.append('image', imageFile)

    if (id) {
      await fetch(`${API}/products/${id}`, { method: 'PUT', body: fd })
    } else {
      await fetch(`${API}/products`, { method: 'POST', body: fd })
    }
    navigate('/admin/products')
  }

  function handleFile(e) {
    const f = e.target.files[0]
    if (!f) return
    setImageFile(f)
    setImagePreview(URL.createObjectURL(f))
  }

  return (
    <AdminLayout>
      <div className="page-container">
        <div className="page-header">
          <div className="page-title">
            <h2>{id ? 'Edit Product' : 'Add Product'}</h2>
            <div className="page-subtitle">Provide details for the product. Images are optional.</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="form-group">
              <label className="form-label">Product Name *</label>
              <input className="text-input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="form-group">
              <label className="form-label">Price *</label>
              <input className="text-input" type="number" step="0.01" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} required />
            </div>
            <div className="form-group">
              <label className="form-label">Stock Quantity</label>
              <input className="text-input" type="number" value={form.countInStock} onChange={e => setForm({ ...form, countInStock: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <input className="text-input" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea className="textarea" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
          </div>

          <div className="form-group">
            <label className="form-label">Product Image</label>
            <input type="file" accept="image/*" onChange={handleFile} />
          </div>

          {imagePreview && (
            <div style={{ marginTop: 16, marginBottom: 16 }}>
              <label className="form-label">Preview</label>
              <img className="image-preview" src={imagePreview} alt="preview" />
            </div>
          )}

          <div className="form-actions">
            <button className="btn btn-primary" type="submit">{id ? 'Update Product' : 'Create Product'}</button>
            <button className="btn btn-secondary" type="button" onClick={() => navigate('/admin/products')}>Cancel</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}

export default AdminProductForm
