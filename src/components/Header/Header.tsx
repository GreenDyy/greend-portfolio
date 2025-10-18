import React, { useState } from 'react'
import { Layout, Typography, Button, Drawer, message } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'
import './Header.scss'
import { Link, useNavigate } from 'react-router-dom'
const { Title } = Typography

function Header() {
    const navigate = useNavigate()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 1024 })
    const isDesktop = useMediaQuery({ minWidth: 1025 })

    const handleTitleClick = () => {
        if (window.innerWidth < 768) {
            message.info('Đây là mobile')
        }
    }

    const showDrawer = () => {
        setIsDrawerOpen(true)
    }

    const onClose = () => {
        setIsDrawerOpen(false)
    }

    const menuItems = (
        <>
            <Link to="/" onClick={onClose}>Trang chủ</Link>
            <Link to="/about" onClick={onClose}>Giới thiệu</Link>
            <Link to="/contact" onClick={onClose}>Liên hệ</Link>
        </>
    )

    return (
        <Layout.Header className="header">
            <Title 
                level={3} 
                className="header-title"
                onClick={handleTitleClick}
            >
                {isMobile ? 'Đây là header mobile' : isTablet ? 'Đây là header tablet' : 'Đây là header desktop'}
            </Title>
            {!isMobile ? (
                <nav className="header-nav">
                    {menuItems}
                </nav>
            ) : (
                <>
                    <Button
                        className="mobile-menu-button"
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={showDrawer}
                    />
                    <Drawer
                        title="Menu"
                        placement="right"
                        onClose={onClose}
                        open={isDrawerOpen}
                        className="mobile-drawer"
                    >
                        <div className="mobile-menu">
                            {menuItems}
                        </div>
                    </Drawer>
                </>
            )}
        </Layout.Header>
    )
}

export default Header