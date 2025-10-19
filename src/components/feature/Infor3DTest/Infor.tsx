import React from 'react'
import './Infor.scss';
import { Flex, Space, Typography } from 'antd';

const renderContent = {
    '1': (
        <Flex className="infor">
            <Typography.Title level={3}>Thông tin mô hình 3D</Typography.Title>
            <Typography.Paragraph>Đây là mô hình 3D của một chiếc xe thể thao. Bạn có thể xoay mô hình bằng cách kéo chuột hoặc sử dụng phím mũi tên trái/phải.</Typography.Paragraph>
        </Flex>
    ),
    '2': (
        <Flex className="infor">
            <Typography.Title level={3}>Chế độ xem thứ hai</Typography.Title>
            <p>Trong chế độ này, bạn có thể quan sát mô hình từ một góc nhìn khác. Thử khám phá các chi tiết ẩn của mô hình.</p>
            <Typography.Paragraph>Mô hình này được tạo bằng công nghệ Three.js và React Three Fiber.</Typography.Paragraph>
        </Flex>
    ),
    '3': (
        <Flex className="infor">
            <Typography.Title level={3}>Thông tin bổ sung</Typography.Title>
            <Typography.Paragraph>Đây là một dự án demo sử dụng React và Three.js để hiển thị mô hình 3D tương tác.</Typography.Paragraph>

        </Flex>
    ),
    '4': (
        <Flex className="infor">
            <Typography.Title level={3}>Thông số kỹ thuật</Typography.Title>
            <Typography.Paragraph>Mô hình xe này có động cơ V8 mạnh mẽ, tốc độ tối đa 320km/h và khả năng tăng tốc từ 0-100km/h trong 3.5 giây.</Typography.Paragraph>
            <Typography.Paragraph>Thiết kế khí động học giúp tối ưu hiệu suất và tiết kiệm nhiên liệu.</Typography.Paragraph>
        </Flex>
    ),
}

function Infor(props) {
    const { currentState } = props
    return (
        renderContent[currentState]
    )
}

export default Infor