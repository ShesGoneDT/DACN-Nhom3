import React from 'react';
import Header from '../share-view/header'
import Footer from '../share-view/footer'
const Login = () => {
    return (
        <>
            <Header></Header>
            <section className="section-defaut section-login">
                <div className="container container-login">
                    <div className="row">
                        {/* Image section only visible on md screens and up */}
                        <div className="col-lg-6 col-md-12 welcome-section-login d-none d-md-block">
                            <div className="image-login">
                                <img
                                    src="https://go2joy.vn/_nuxt/wellcome.9770d0e7.png"
                                    alt="Welcome to Hotel"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                        {/* Login section */}
                        <div className="col-lg-6 col-md-12 login-section-login">
                            <h2>Đăng nhập</h2>
                            <form>
                                <div className="input-group-login mb-3">
                                    {/* Adjust input width for mobile */}
                                    <input type="text" className="form-control mb-2" placeholder="Email đăng nhập" />
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                {/* Login button */}
                                <button type="submit" className="btn btn-warning btn-block w-100 submit-btn-login">
                                    Tiếp tục
                                </button>
                            </form>

                            {/* Social media login */}
                            <div className="alternative-login text-center mt-4">
                                <p>Hoặc đăng nhập bằng</p>
                                <div className="login-options-login d-flex justify-content-between flex-wrap">
                                    {/* Social media buttons */}
                                    {/* <button className="btn btn-primary w-100 mx-1 mb-2 social-btn-login facebook-login">
                                        Facebook
                                    </button>
                                    <button className="btn btn-danger w-100 mx-1 mb-2 social-btn-login google-login">
                                        Google
                                    </button>
                                    <button className="btn btn-dark w-100 mx-1 mb-2 social-btn-login apple-login">
                                        Apple
                                    </button> */}
                                </div>
                            </div>

                            {/* Registration link */}
                            <p className="text-center mt-4 register-link-login">
                                Bạn chưa có tài khoản Go2Joy? <a href="#">Đăng ký</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>

    );
};

export default Login;
