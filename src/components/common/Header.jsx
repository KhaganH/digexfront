import React, { useState, useRef, useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { useCart } from '../../hooks/useCart';
import { useSearch } from '../../hooks/useSearch';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, message: 'New order received', time: '2 min ago', read: false },
    { id: 2, message: 'Product approved', time: '1 hour ago', read: true },
    { id: 3, message: 'Account balance updated', time: '3 hours ago', read: false }
  ]);

  const { user, isAuthenticated, balance, logout, hasRole } = useAuthContext();
  const { cartCount } = useCart();
  const { searchQuery, searchResults, isSearching, handleSearchChange } = useSearch();

  const searchInputRef = useRef(null);
  const userDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
      if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
        setIsNotificationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page
      console.log('Searching for:', searchQuery);
    }
  };

  const handleLogout = () => {
    logout();
    setIsUserDropdownOpen(false);
  };

  const unreadNotificationCount = notifications.filter(n => !n.read).length;

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar bg-dark text-white py-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <small className="d-flex align-items-center">
                <i className="bi bi-telephone me-2"></i>
                <span className="me-3">+1 (555) 123-4567</span>
                <i className="bi bi-envelope me-2"></i>
                <span>info@digex.com</span>
              </small>
            </div>
            <div className="col-md-6 text-end">
              <small className="text-warning">
                <i className="bi bi-shield-check me-1"></i>
                Secure Shopping Guarantee
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand fw-bold text-primary" href="/">
            <i className="bi bi-shop me-2"></i>
            DigEx
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <i className="bi bi-house me-1"></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  <i className="bi bi-box-seam me-1"></i>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sellers">
                  <i className="bi bi-shop me-1"></i>
                  Sellers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  <i className="bi bi-info-circle me-1"></i>
                  About
                </a>
              </li>
              
              {/* Role-based menu items */}
              {hasRole('ADMIN') && (
                <li className="nav-item">
                  <a className="nav-link text-danger" href="/admin">
                    <i className="bi bi-gear me-1"></i>
                    Admin Panel
                  </a>
                </li>
              )}
              
              {hasRole('SELLER') && (
                <li className="nav-item">
                  <a className="nav-link text-success" href="/seller">
                    <i className="bi bi-graph-up me-1"></i>
                    Seller Panel
                  </a>
                </li>
              )}
            </ul>

            {/* Search Form */}
            <form className="d-flex me-3 position-relative" onSubmit={handleSearchSubmit}>
              <div className="input-group">
                <input
                  ref={searchInputRef}
                  className="form-control"
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
                <button className="btn btn-outline-secondary" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
              
              {/* Search Results Dropdown */}
              {searchQuery && (
                <div className="search-dropdown position-absolute top-100 start-0 w-100 bg-white border shadow-lg z-3">
                  {isSearching ? (
                    <div className="p-3 text-center">
                      <i className="bi bi-search spin me-2"></i>
                      Searching...
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="list-group list-group-flush">
                      {searchResults.map(result => (
                        <a
                          key={result.id}
                          href={`/products/${result.id}`}
                          className="list-group-item list-group-item-action"
                        >
                          <div className="d-flex justify-content-between">
                            <div>
                              <h6 className="mb-1">{result.title}</h6>
                              <small className="text-muted">{result.description}</small>
                            </div>
                            <div className="text-end">
                              <span className="text-primary fw-bold">${result.price}</span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="p-3 text-center text-muted">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </form>

            {/* Right Menu */}
            <ul className="navbar-nav">
              {/* Cart */}
              <li className="nav-item">
                <a className="nav-link position-relative" href="/cart">
                  <i className="bi bi-cart3 fs-5"></i>
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount}
                    </span>
                  )}
                </a>
              </li>

              {isAuthenticated ? (
                <>
                  {/* Balance Display */}
                  <li className="nav-item">
                    <span className="nav-link text-success fw-bold">
                      <i className="bi bi-wallet2 me-1"></i>
                      ${balance.toFixed(2)}
                    </span>
                  </li>

                  {/* Notifications */}
                  <li className="nav-item dropdown" ref={notificationDropdownRef}>
                    <button
                      className="nav-link btn btn-link position-relative"
                      onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
                    >
                      <i className="bi bi-bell fs-5"></i>
                      {unreadNotificationCount > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                          {unreadNotificationCount}
                        </span>
                      )}
                    </button>
                    {isNotificationDropdownOpen && (
                      <div className="dropdown-menu dropdown-menu-end show">
                        <h6 className="dropdown-header">Notifications</h6>
                        {notifications.map(notification => (
                          <a
                            key={notification.id}
                            className={`dropdown-item ${!notification.read ? 'bg-light' : ''}`}
                            href="#"
                          >
                            <div className="d-flex justify-content-between">
                              <div>
                                <div className="fw-bold">{notification.message}</div>
                                <small className="text-muted">{notification.time}</small>
                              </div>
                              {!notification.read && (
                                <i className="bi bi-circle-fill text-primary" style={{ fontSize: '0.5rem' }}></i>
                              )}
                            </div>
                          </a>
                        ))}
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-center" href="/notifications">
                          View All Notifications
                        </a>
                      </div>
                    )}
                  </li>

                  {/* User Dropdown */}
                  <li className="nav-item dropdown" ref={userDropdownRef}>
                    <button
                      className="nav-link btn btn-link d-flex align-items-center"
                      onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    >
                      <i className="bi bi-person-circle me-1 fs-5"></i>
                      {user?.firstName || user?.username}
                      <i className="bi bi-chevron-down ms-1"></i>
                    </button>
                    {isUserDropdownOpen && (
                      <div className="dropdown-menu dropdown-menu-end show">
                        <h6 className="dropdown-header">
                          {user?.firstName} {user?.lastName}
                          <br />
                          <small className="text-muted">{user?.email}</small>
                        </h6>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/profile">
                          <i className="bi bi-person me-2"></i>
                          Profile
                        </a>
                        <a className="dropdown-item" href="/orders">
                          <i className="bi bi-bag me-2"></i>
                          My Orders
                        </a>
                        <a className="dropdown-item" href="/wishlist">
                          <i className="bi bi-heart me-2"></i>
                          Wishlist
                        </a>
                        <a className="dropdown-item" href="/settings">
                          <i className="bi bi-gear me-2"></i>
                          Settings
                        </a>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item text-danger" onClick={handleLogout}>
                          <i className="bi bi-box-arrow-right me-2"></i>
                          Logout
                        </button>
                      </div>
                    )}
                  </li>
                </>
              ) : (
                <>
                  {/* Login/Register */}
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      <i className="bi bi-box-arrow-in-right me-1"></i>
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">
                      <i className="bi bi-person-plus me-1"></i>
                      Register
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;