import React from 'react';
import Header from '../share-view/header'
import Footer from '../share-view/footer'
const Home = () => {
    return (
        <>
            <Header></Header>
            {/* Banner Section */}
            <section className="banner-section">
                <div className="container py-5 text-white d-flex align-items-center justify-content-center">
                    <div className="row align-items-center">
                        <div className="col-md-9">
                            <h1 className="mb-4">Đặt phòng khách sạn linh hoạt - Giá tốt nhất</h1>
                            <p className="lead">Phòng yêu ứng ý không lo cháy ví. Hoàn phí ngay nếu giá khách sạn rẻ hơn!</p>
                        </div>
                        {/* Uncomment to add promo image */}
                        {/* <div className="col-md-6 text-end">
                            <img src="promo-image.png" alt="Promo" className="img-fluid" />
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="search-section py-3">
                <div className="container bg-white shadow p-4 rounded">
                    <ul className="nav nav-pills justify-content-center mb-4">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <i className="fas fa-clock"></i> Theo giờ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-moon"></i> Qua đêm
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-calendar-day"></i> Theo ngày
                            </a>
                        </li>
                    </ul>
                    <form className="row g-2 justify-content-center">
                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                                <input type="text" className="form-control" placeholder="Bạn muốn đi đâu?" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="input-group">
                                <span className="input-group-text"><i className="fas fa-sign-in-alt"></i></span>
                                <input type="text" className="form-control" placeholder="Nhận phòng" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="input-group">
                                <span className="input-group-text"><i className="fas fa-sign-out-alt"></i></span>
                                <input type="text" className="form-control" placeholder="Trả phòng" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-warning btn-hotel" type="submit">Tìm kiếm <i className="fas fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Promotional Banners */}
            <section className="container my-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="card border-0 shadow">
                            <img src="https://s3.go2joy.vn/350w/banner/8707_1727751259_66fb645b1491d.webp" className="card-img-top" alt="Deal Banner" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow">
                            <img src="https://s3.go2joy.vn/350w/banner/8707_1727758030_66fb7ecee300b.webp" className="card-img-top" alt="Discount Banner" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow">
                            <img src="https://s3.go2joy.vn/350w/banner/8707_1727751436_66fb650ca4716.webp" className="card-img-top" alt="Promo Banner" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-orange text-white text-center py-5">
                <div className="container d-flex justify-content-center">
                    <div>
                        <img src="https://go2joy.vn/images/sign-up-cover.png" alt="" width="400" height="300" />
                    </div>
                    <div className="benefits-section">
                        <h2>Đăng ký tài khoản và nhận các quyền lợi</h2>
                        <ul className="list-unstyled my-4">
                            <li className="mb-3">
                                <i className="fas fa-check-circle text-green bg-light rounded-circle p-2 mr-2"></i>
                                Nhận và sử dụng ưu đãi từ Go2Joy và đối tác
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check-circle text-green bg-light rounded-circle p-2 mr-2"></i>
                                Tích Joy Xu và tham gia chương trình tem tại khách sạn để đổi những ưu đãi hấp dẫn
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check-circle text-green bg-light rounded-circle p-2 mr-2"></i>
                                Nhận ngay coupon giảm giá 55% với người dùng mới
                            </li>
                        </ul>
                        <button className="btn btn-light">Đăng ký & Nhận ưu đãi</button>
                    </div>
                </div>
            </section>
            {/* Hotel Categories */}
            <section className="container my-5">
                <div className="category-hotel">
                    <h2 className="text-center mb-4">Danh mục khách sạn</h2>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <i className="fas fa-bed fa-3x text-orange"></i>
                                    <h5 className="card-title">Tình yêu</h5>
                                    <p className="card-text">Hơn 300 khách sạn kèm nhiều ưu đãi cho các cặp đôi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <i className="fas fa-star fa-3x text-orange"></i>
                                    <h5 className="card-title">Hot review</h5>
                                    <p className="card-text">Khám phá các khách sạn đang nhận được nhiều review gần đây nhất.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <i className="fas fa-plane fa-3x text-orange"></i>
                                    <h5 className="card-title">Du lịch</h5>
                                    <p className="card-text">Khám phá những vùng đất mới, tận hưởng và tăng chuyến đi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <i className="fas fa-heart fa-3x text-orange"></i>
                                    <h5 className="card-title">Mới mà chất</h5>
                                    <p className="card-text">Hàng trăm khách sạn mới trên Go2Joy đang chờ bạn khám phá.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="category-hotel">
                    <h2 className="text-center mb-4">Trải nghiệm cùng Go2Joy</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div
                                className="card bg-image"
                                style={{
                                    backgroundImage: "url('https://s3.go2joy.vn/350w/hotel/9078_1723781409_66bed121993bb.webp')",
                                }}
                            >
                                <div className="card-body text-center text-white">
                                    <i className="fas fa-bolt fa-3x"></i>
                                    <h5 className="card-title">Giá sốc Đêm nay</h5>
                                    <button className="btn btn-light">Xem thêm</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div
                                className="card bg-image"
                                style={{
                                    backgroundImage: "url('https://s3.go2joy.vn/350w/hotel/9078_1723781430_66bed1368bf64.webp')",
                                }}
                            >
                                <div className="card-body text-center text-white">
                                    <i className="fas fa-tags fa-3x"></i>
                                    <h5 className="card-title">Ưu đãi hấp dẫn</h5>
                                    <button className="btn btn-light">Xem thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Promotion Section */}
            <section className="blog-section py-5 brg-blog d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-white">Những điều thú vị có thể bạn chưa biết</h2>
                            <p className="lead text-white">Khám phá những điều mới mẻ, thú vị từ các bài viết của chúng tôi.</p>
                            <a href="#" className="btn btn-outline-dark text-white" style={{ border: '1px solid white' }}>
                                Danh sách bài blog
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* City Section */}
            <section className="city-section py-5">
                <div className="container">
                    <h3 className="mb-4">Cảm hứng cho những lần tiếp theo</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-tabs justify-content-center">
                                <li className="nav-item">
                                    <a href="#" className="nav-link active">TP Hồ Chí Minh</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Hà Nội</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Đà Nẵng</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Bà Rịa - Vũng Tàu</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Hải Phòng</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col-md-2">
                            <p><strong>Quận 1</strong><br />1485 khách sạn</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Quận 2</strong><br />431 khách sạn</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Phú Nhuận</strong><br />158 khách sạn</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Bình Thạnh</strong><br />847 khách sạn</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Tân Bình</strong><br />385 khách sạn</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Gò Vấp</strong><br />122 khách sạn</p>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col-md-2">
                            <p><strong>Quận 4</strong><br />746 khách sạn</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Quận 3</strong><br />378 khách sạn</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Quận 10</strong><br />117 khách sạn</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Quận 7</strong><br />442 khách sạn</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Thủ Đức</strong><br />195 khách sạn</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Bình Chánh</strong><br />102 khách sạn</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Home;
