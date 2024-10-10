import Header from '../share-view/header';
import Footer from '../share-view/footer';

const HotelDetail = () => {
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
                alt="Main Hotel Image"
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <span className="idea w-100">Gợi ý cho bạn</span>
              <div className="row">
                <div className="room-list-detail">
                  <div className="room-item-detail">
                    <img
                      src="https://s3.go2joy.vn/350w/hotel/705_1495074618719/2_705_66_1527759340719.jpg"
                      alt="Standard Room"
                      className="img-fluid"
                    />
                    <div className="room-details-detail">
                      <h5>Standard Room</h5>
                      <p>18 m² - Cửa sổ</p>
                      <a href="#">Xem chi tiết phòng</a>
                    </div>
                    <div>
                      <p className="room-price-detail">
                        80.000₫ <br /> <span className="original-price-detail">150.000₫</span>
                      </p>
                      <button className="btn btn-book-detail">Đặt phòng</button>
                    </div>
                  </div>

                  <div className="room-item-detail">
                    <img
                      src="https://s3.go2joy.vn/350w/hotel/705_1495074618719/2_705_66_1527759340719.jpg"
                      alt="Standard VIP Room"
                      className="img-fluid"
                    />
                    <div className="room-details-detail">
                      <h5>Standard VIP Room</h5>
                      <p>20 m² - Cửa sổ</p>
                      <a href="#">Xem chi tiết phòng</a>
                    </div>
                    <div>
                      <p className="room-price-detail">
                        80.000₫ <span className="original-price-detail">150.000₫</span>
                      </p>
                      <button className="btn btn-book-detail no-wrap">Đặt phòng</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="amenities">
            <div style={{ padding: '20px', width: '800px' }}>
              <p>
                <strong>Giới thiệu :</strong>
              </p>
              <div className="amenities-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
          </div>

          {/* Room List */}
          <h3 className="mt-4">Danh sách phòng</h3>
          <div className="room-list-detail">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4">
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
                      <button className="btn btn-book-detail">Đặt phòng</button>
                    </div>
                  </div>
                </div>

                {/* Repeat the same structure for other rooms */}
              </div>

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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HotelDetail;
