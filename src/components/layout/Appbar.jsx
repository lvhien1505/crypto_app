import {
    Button,
    List,
    Typography,
    Image,
    Row,
    Col,
    Space,
    Dropdown,
    Menu,
    Card,
} from 'antd';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import {
    UserOutlined,
    TransactionOutlined,
    InfoCircleOutlined,
    CreditCardOutlined,
    LogoutOutlined,
    ToolOutlined,
    ToolFilled,
} from '@ant-design/icons';
import icon from 'assets/images/brand_crypto.png';
import './styles/Appbar.scss';

const Navbar = () => {
    const { Item } = List;
    let navigate = useNavigate();
    let { user } = useOutletContext();
    const data = [
        {
            path: '/',
            label: 'Trang chủ',
        },
        {
            path: '/crypto-currencies',
            label: 'Tiền điện tử',
        },
        {
            path: '/exchanges',
            label: 'Mua bán',
        },
    ];

    const onLogout = () => {
        localStorage.removeItem('__t');
        navigate('/login');
    };

    const onRedirect = (path) => {
        navigate(`/${path}`);
    };

    const menu = (
        <Menu style={{ width: '200px' }}>
            <Menu.Item
                className="item"
                icon={<InfoCircleOutlined />}
                key="1"
                onClick={() => onRedirect('info')}
            >
                <Typography.Text style={{ fontWeight: '600' }}>
                    Thông tin
                </Typography.Text>
            </Menu.Item>
            <Menu.Item
                className="item"
                icon={<CreditCardOutlined />}
                key="2"
                onClick={() => onRedirect('payment')}
            >
                <Typography.Text style={{ fontWeight: '600' }}>
                    Thanh toán
                </Typography.Text>
            </Menu.Item>
            <Menu.Item
                className="item"
                icon={<LogoutOutlined style={{ color: '#da624a' }} />}
                onClick={onLogout}
                key="3"
            >
                <Typography.Text
                    style={{ fontWeight: '600', color: '#da624a' }}
                >
                    Đăng xuất
                </Typography.Text>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="appbar">
            <div className="appbar-container">
                <div className="header">
                    <Row
                        justify="space-between"
                        align="middle"
                        style={{ width: '100%' }}
                    >
                        <Col xl={4}>
                            <Space align="center">
                                <Image
                                    src={icon}
                                    height={40}
                                    width={40}
                                    preview={false}
                                />
                                <Typography.Title level={3} className="logo">
                                    <Link to="/">
                                        <span className="logo-left">Moon</span>
                                        <span className="logo-right">
                                            Crypto
                                        </span>
                                    </Link>
                                </Typography.Title>
                            </Space>
                        </Col>
                        <Col>
                            {user._id && user.role === 'admin' ? (
                                <Button icon={<ToolOutlined />} type="text">
                                    Quản lý
                                </Button>
                            ) : null}
                            {user._id ? (
                                <Dropdown trigger={['click']} overlay={menu}>
                                    <Button icon={<UserOutlined />} type="text">
                                        {user.fullName}
                                    </Button>
                                </Dropdown>
                            ) : (
                                <Button
                                    icon={<UserOutlined />}
                                    type="primary"
                                    onClick={() => onRedirect('login')}
                                >
                                    Đăng nhập
                                </Button>
                            )}
                        </Col>
                    </Row>
                </div>
                <div className="navmenu-container">
                    <List
                        grid={{
                            gutter: 24,
                        }}
                        renderItem={(item) => (
                            <Item key={item.label} className="navmenu-item">
                                <Typography.Text>
                                    <Link to={item.path}>{item.label}</Link>
                                </Typography.Text>
                            </Item>
                        )}
                        dataSource={data}
                        className="navmenu-list"
                    />
                    <Button icon={<TransactionOutlined />}>
                        Giao dịch P2P
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
