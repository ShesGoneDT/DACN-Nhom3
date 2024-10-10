import React from 'react';
import Header from '../share-view/header';
import Footer from '../share-view/footer';

const Hotel = () => {
    return (
        <>
            <Header />

            <section className="section-defaut hotel-list-section brg-hotel">
                <div className="container container-fluid">
                    <div className="row">
                        {/* Hotel list section */}
                        <div className="col-lg-7 col-md-12">
                            <div className="hotel-list">
                                <div className="hotel-item d-flex">
                                    <img
                                        src="https://s3.go2joy.vn/350w/hotel/2843/4479_1678758513_640fd271ebee0.webp"
                                        alt="A25 Hotel"
                                        className="img-fluid"
                                        width="500"
                                    />
                                    <div className="hotel-info">
                                        <h3>A25 HOTEL – LÊ THỊ HỒNG GẤM - HCM</h3>
                                        <p>Bồn tắm</p>
                                        <p>4.9 ⭐ (361 đánh giá) - Quận 1</p>
                                        <p className="price">
                                            2 giờ đầu: <span>210.000₫</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="hotel-item d-flex">
                                    <img
                                        src="https://s3.go2joy.vn/350w/hotel/485/6130_1644395802_62037d1a441b2.jpg"
                                        alt="Hồng Phát Hotel"
                                        className="img-fluid"
                                    />
                                    <div className="hotel-info">
                                        <h3>Hồng Phát Hotel</h3>
                                        <p>4.7 ⭐ (244 đánh giá) - Quận 11</p>
                                        <p className="price">
                                            1 giờ đầu: <span>92.000₫</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="hotel-item d-flex">
                                    <img
                                        src="https://s3.go2joy.vn/350w/hotel/705_1495074618719/2_705_66_1527759340719.jpg"
                                        alt="A25 LUXURY HOTEL"
                                        className="img-fluid"
                                    />
                                    <div className="hotel-info">
                                        <h3>A25 HOTEL - 55 CÁCH MẠNG THÁNG TÁM</h3>
                                        <p>4.9 ⭐ (79 đánh giá) - Quận 1</p>
                                        <p className="price">
                                            2 giờ đầu: <span>210.000₫</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Pagination */}
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                4
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                5
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                ...
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                32
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* Map section */}
                        <div className="col-lg-5 col-md-12">
                            <div className="hotel-info-container">
                                <div className="map-container">
                                    <img
                                        src="https://s3.go2joy.vn/350w/hotel/705_1495074618719/2_705_66_1527759340719.jpg"
                                        alt="Map"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="hotel-info-detail">
                                    <div className="hotel-info">
                                        <h3>A25 HOTEL - 55 CÁCH MẠNG THÁNG TÁM</h3>
                                        <p>4.9 ⭐ (79 đánh giá) - Quận 1</p>
                                        <p className="price">
                                            2 giờ đầu: <span>210.000₫</span>
                                        </p>
                                        <div className="amenities">
                                            <div>
                                                <p>
                                                    <strong>Tiện ích :</strong>
                                                </p>
                                                <div>
                                                    <ul className="amenities-list">
                                                        <li>Bãi đỗ xe</li>
                                                        <li>Buffer</li>
                                                        <li>Vòi hoa sen</li>
                                                        <li>Bồn Tắm</li>
                                                        <li>Bãi đỗ xe</li>
                                                        <li>Vòi hoa sen</li>
                                                        <li>Buffer</li>
                                                        <li>Vòi hoa sen</li>
                                                        <li>Bồn Tắm</li>
                                                        <li>Abc</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    <strong>Giới thiệu :</strong>
                                                </p>
                                                <div className="amenities-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua....
                                                </div>
                                                <a className="more-infor">
                                                    <strong>Xem chi tiết </strong>
                                                    <i className="fa-solid fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Hotel;
