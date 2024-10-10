import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
    return (
        <header className="bg-gradient">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="logo.png" alt="Go2Joy Logo" width="120" />
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/offers">Ưu đãi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hotel-categories">Danh mục khách sạn</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/download">Tải ứng dụng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/language">Tiếng Việt</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Đăng nhập</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-warning">
                                    <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Đăng ký</Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
