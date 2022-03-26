import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <Typography.Title
                level={5}
                style={{ color: 'white', textAlign: 'center' }}
            >
                Copyright © 2022
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
    );
};

export default Footer;
