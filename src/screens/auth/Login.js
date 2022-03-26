import {
    GoogleOutlined,
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    Button,
    Col,
    Form,
    Input,
    notification,
    Row,
    Space,
    Typography,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { login, loadingLogin } from 'states/slices/authSlide';
import Auth from './Auth';

const Login = () => {
    const { Item, useForm } = Form;
    let [form] = useForm();
    let navigate = useNavigate();
    let dispath = useDispatch();
    let { statusLogin } = useSelector((state) => state.auth);

    const onSumitForm = () => {
        form.submit();
    };

    const onFinishForm = (values) => {
        dispath(loadingLogin());

        const account = {
            email: values.email,
            password: values.password,
        };

        setTimeout(async () => {
            try {
                let res = await dispath(login(account)).unwrap();

                if (res.status) {
                    localStorage.setItem('__t', res.data.token);
                    navigate('/')
                }
            } catch (error) {
                if (error.status === 0) {
                    return notification.error({ message: error.message });
                }

                return notification.error({ message: 'Lỗi máy chủ' });
            }
        }, 2000);
    };
    return (
        <Auth title="Đăng nhập">
            <Form form={form} onFinish={onFinishForm}>
                <Item name="email">
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                        size="large"
                    />
                </Item>
                <Item name="password" style={{ marginBottom: '0px' }}>
                    <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Mật khẩu"
                        size="large"
                    />
                </Item>
                <Item style={{ marginBottom: '12px' }}>
                    <Row justify="end">
                        <Col>
                            <Typography.Text>
                                <Link to="/forgot-password">
                                    Quên mật khẩu ?
                                </Link>
                            </Typography.Text>
                        </Col>
                    </Row>
                </Item>
                <Item style={{ marginBottom: '12px' }}>
                    <Button
                        onClick={onSumitForm}
                        loading={statusLogin === 'loading' ? true : false}
                        type="primary"
                        size="large"
                        style={{ width: '100%' }}
                    >
                        Đăng nhập
                    </Button>
                </Item>
                <Item style={{ marginBottom: '12px' }}>
                    <Row justify="center">
                        <Col>
                            <Typography.Text>HOẶC</Typography.Text>
                        </Col>
                    </Row>
                </Item>
                <Item style={{ marginBottom: '12px' }}>
                    <Row justify="center">
                        <Col>
                            <Space>
                                <Button
                                    icon={<GoogleOutlined />}
                                />
                            </Space>
                        </Col>
                    </Row>
                </Item>
                <Item style={{ marginBottom: '0px'}}>
                    <Row justify="center">
                        <Col>
                            <Space>
                                <Typography.Text>
                                    Bạn chưa có tài khoản ?
                                </Typography.Text>
                                <Typography.Text>
                                    <Link to="/register">Đăng kí </Link>
                                </Typography.Text>
                            </Space>
                        </Col>
                    </Row>
                </Item>
            </Form>
        </Auth>
    );
};

export default Login;
