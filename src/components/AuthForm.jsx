import React from 'react';

function AuthForm(props) {
    return (
        <div className="modal" >
            <div className="modal__overlay" />
            <div className="modal__body">
                <div className="modal__inner">
                    <div className="auth-form">
                        <div className="auth-form__container">
                            <div className="auth-form__header">
                                <h3 className="auth-form__heading">Đăng Ký</h3>
                                <span className="auth-form__switch-btn">Đăng Nhập</span>
                            </div>
                            <div className="auth-form__form">
                                <div className="auth-form__group">
                                    <input type="text" className="auth-form__input" placeholder="Email của bạn" />
                                </div>
                                <div className="auth-form__group">
                                    <input type="text" className="auth-form__input" placeholder="Mật khẩu của bạn" />
                                </div>
                                <div className="auth-form__group">
                                    <input type="text" className="auth-form__input" placeholder="Nhập lại mật khẩu" />
                                </div>
                            </div>
                            <div className="auth-form__policy">
                                <p className="auth-form__policy-text">
                                    Bằng việc đăng ký, bạn đã đồng ý với chúng tôi về
                                    <a href="true" className="auth-form__policy-link"> Điều khoản dịch vụ</a> &amp;
                                    <a href="true" className="auth-form__policy-link">Chính sách bảo mật</a>
                                </p>
                            </div>
                            <div className="auth-form__controls">
                                <button className="btn btn--back">TRỞ LẠI</button>
                                <button className="btn btn--primary">ĐĂNG KÝ</button>
                            </div>
                        </div>
                        <div className="auth-form__socials">
                            <a href="true" className="btn btn--size-s btn-fb">
                                <i className="fab fa-facebook-square auth-form__socials-icon" />
                                <span className="auth-form__socials-title">Kết nối với Facebook</span>
                            </a>
                            <a href="true" className="btn btn--size-s btn-gg">
                                <i className="fab fa-google auth-form__socials-icon" />
                                <span className="auth-form__socials-title">Kết nối với Google</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AuthForm;