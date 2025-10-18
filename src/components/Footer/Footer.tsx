import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import './Footer.scss';

const { Text, Link } = Typography;

function Footer() {
    return (
        <Layout.Footer className="footer">
            <Row gutter={[24, 24]}>
                <Col xs={24} sm={8}>
                    <div className="footer-section">
                        <h4>Về chúng tôi</h4>
                        <Text>
                            Chúng tôi cung cấp các giải pháp công nghệ tốt nhất cho doanh nghiệp của bạn.
                        </Text>
                    </div>
                </Col>
                <Col xs={24} sm={8}>
                    <div className="footer-section">
                        <h4>Liên kết</h4>
                        <ul>
                            <li><Link href="/">Trang chủ</Link></li>
                            <li><Link href="/services">Dịch vụ</Link></li>
                            <li><Link href="/about">Giới thiệu</Link></li>
                            <li><Link href="/contact">Liên hệ</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={24} sm={8}>
                    <div className="footer-section">
                        <h4>Liên hệ</h4>
                        <ul>
                            <li>Email: contact@example.com</li>
                            <li>Điện thoại: (84) 123-456-789</li>
                            <li>Địa chỉ: TP HCM, Việt Nam</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <div className="footer-bottom">
                <Text>© 2025 GreenD. Đã đăng ký bản quyền.</Text>
            </div>
        </Layout.Footer>
    );
}

export default Footer;
