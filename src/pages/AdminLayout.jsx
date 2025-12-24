import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './adminLayout.css'
import { MdDashboard, MdShoppingCart, MdPeople, MdAssessment, MdLogout, MdMenu, MdClose } from "react-icons/md"
import { AiOutlineProduct } from "react-icons/ai"

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) {
        setSidebarOpen(true)
      } else {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      navigate('/')
    }
  }

  const handleNavClick = () => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const navItems = [
    { label: 'Dashboard', icon: <MdDashboard />, path: '/admin' },
    { label: 'Products', icon: <AiOutlineProduct />, path: '/admin/products' },
    { label: 'Orders', icon: <MdShoppingCart />, path: '/admin/orders' },
    { label: 'Customers', icon: <MdPeople />, path: '/admin/customers' },
    { label: 'Reports', icon: <MdAssessment />, path: '/admin/reports' },
  ]

  return (
    <div className="admin-layout">
      {/* Mobile menu button */}
      {isMobile && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, background: '#2d3748', color: '#fff', padding: '12px', display: 'flex', alignItems: 'center', zIndex: 99 }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            {sidebarOpen ? <MdClose /> : <MdMenu />}
          </button>
          <span style={{ marginLeft: 12, fontSize: 14, fontWeight: 600 }}>ProfiPulse</span>
        </div>
      )}

      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        {!isMobile && (
          <div className="sidebar-header">
            <div className="app-logo">ProfiPulse</div>
            <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? '←' : '→'}
            </button>
          </div>
        )}

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <span className="nav-icon"><MdLogout /></span>
            {sidebarOpen && <span className="nav-label">Logout</span>}
          </button>
        </div>
      </div>

      <div className="admin-content" style={{ marginTop: isMobile ? 50 : 0 }}>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout