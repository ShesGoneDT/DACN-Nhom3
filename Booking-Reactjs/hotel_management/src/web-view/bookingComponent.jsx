import React, { useState } from 'react';
import Header from '../share-view/header';
import Footer from '../share-view/footer';

const Booking = () => {
    // State to manage form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        departureDate: '',
        persons: 1,
        info: '',
    });

    // Handle form input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data
        console.log(formData);
        alert('Booking form submitted!');
    };

    return (
        <>
            <Header />

            <section>
                <div className="container">
                    {/* Hotel Header */}
                    <div className="hotel-header-detail mt-4">
                        <div>
                            <h1 className="text-hotel-color">HƯNG HƯỚNG HOTEL</h1>
                            <p className="address-detail">321 Nguyễn Thái Bình, Phường 12, Tân Bình, Hồ Chí Minh</p>
                        </div>
                        <div className="rating-detail">
                            <span className="star-detail">⭐ 4.6/5</span>
                            <span className="review-count-detail">(383 Đánh giá)</span>
                        </div>
                    </div>

                    {/* Hotel Image Gallery */}
                    <div className="row mt-3">
                        <div className="col-lg-8 col-md-12">
                            <img
                                className="main-detail-img img-fluid"
                                src="https://s3.go2joy.vn/350w/hotel/705_1495074618719/2_705_66_1527759340719.jpg"
                                alt="Main Hotel"
                            />

                            {/* Tiện ích và Giới thiệu */}
                            <div className="amenities mt-4">
                                <p className="price">2 giờ đầu: <span>210.000₫</span></p>
                                <div>
                                    <p className="text-hotel-color"><strong>Tiện ích :</strong></p>
                                    <ul className="amenities-list">
                                        <li>Bãi đỗ xe</li>
                                        <li>Buffer</li>
                                        <li>Vòi hoa sen</li>
                                        <li>Bồn Tắm</li>
                                        {/* More amenities... */}
                                    </ul>
                                </div>
                                <div className="mt-3">
                                    <p className="text-hotel-color"><strong>Giới thiệu :</strong></p>
                                    <div className="amenities-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <div className="col-lg-4 col-md-12">
                            <div className="form-booking mt-3">
                                <h2>Book Today</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">👤 Name</label>
                                        <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">✉️ Email</label>
                                        <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="contact">📱 Zalo/WhatsApp/Kakaotalk/WeChat</label>
                                        <input type="text" id="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Info" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="departureDate">🗓️ Departure Date</label>
                                        <input type="date" id="departureDate" value={formData.departureDate} onChange={handleChange} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="persons">👥 Persons</label>
                                        <input type="number" id="persons" value={formData.persons} onChange={handleChange} min="1" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="info">ℹ️ More information (Hotel/Diet/Other)</label>
                                        <textarea id="info" rows="3" value={formData.info} onChange={handleChange} placeholder="More information" />
                                    </div>

                                    <button type="submit" className="btn-submit">BOOK NOW</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Suggested Rooms Section */}
            <section className="section-default">
                <div className="container">
                    <h3 className="mt-4">Đề xuất cho bạn</h3>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div className="hotel-item d-flex">
                                <img src="https://s3.go2joy.vn/350w/hotel/2843/4479_1678758513_640fd271ebee0.webp" alt="A25 Hotel" className="img-fluid" />
                                <div className="hotel-info">
                                    <h3>A25 HOTEL – LÊ THỊ HỒNG GẤM - HCM</h3>
                                    <p>4.9 ⭐ (361 đánh giá) - Quận 1</p>
                                    <p className="price">2 giờ đầu: <span>210.000₫</span></p>
                                    <button className="btn btn-book-detail">Đặt phòng</button>
                                </div>
                            </div>
                        </div>
                        {/* Add more room items... */}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Booking;
