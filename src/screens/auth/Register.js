import {
    LockOutlined,
    PhoneOutlined,
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
import { register, loadingRegister } from 'states/slices/authSlide';
import Auth from './Auth';

const Register = () => {
    const { Item, useForm } = Form;
    let [form] = useForm();
    let navigate = useNavigate();
    let dispath = useDispatch();
    let { statusRegister } = useSelector((state) => state.auth);

    const onSumitForm = () => {
        form.submit();
    };

    const onFinishForm = (values) => {
        dispath(loadingRegister());

        const account = {
            fullName:values.fullName,
            email: values.email,
            phone:values.phone,
            password: values.password,
        };

        setTimeout(async () => {
            try {
                let res = await dispath(register(account)).unwrap();

                if (res.status) {
                    notification.success({ message: res.message });
                    navigate('/login')

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
        <Auth title="Đăng kí">
            <Form form={form} onFinish={onFinishForm}>
                <Item name="fullName">
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Họ tên"
                        size="large"
                    />
                </Item>
                <Item name="email">
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                        size="large"
                    />
                </Item>
                <Item name="phone">
                    <Input
                        prefix={
                            <PhoneOutlined className="site-form-item-icon" />
                        }
                        placeholder="Số điện thoại"
                        size="large"
                    />
                </Item>
                <Item name="password">
                    <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Mật khẩu"
                        size="large"
                    />
                </Item>
                <Item name="repassword" style={{ marginBottom: '36px' }}>
                    <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Nhập lại mật khẩu"
                        size="large"
                    />
                </Item>
                <Item style={{ marginBottom: '12px' }}>
                    <Button
                        onClick={onSumitForm}
                        loading={statusRegister === 'loading' ? true : false}
                        type="primary"
                        size="large"
                        style={{ width: '100%' }}
                    >
                        Đăng kí
                    </Button>
                </Item>

                <Item style={{ marginBottom: '0px' }}>
                    <Row justify="center">
                        <Col>
                            <Space>
                                <Typography.Text>
                                    Đã có tài khoản ?
                                </Typography.Text>
                                <Typography.Text>
                                    <Link to="/login">Đăng nhập </Link>
                                </Typography.Text>
                            </Space>
                        </Col>
                    </Row>
                </Item>
            </Form>
        </Auth>
    );
};

export default Register;
