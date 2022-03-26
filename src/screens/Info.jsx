import { Button, Card, Col, Row, Space, Typography } from 'antd';
import Layout from 'components/layout';
import { useOutletContext } from 'react-router-dom';

const Info = () => {
    let { user } = useOutletContext();
    const styleLabel={
        fontWeight:600
    }

    return (
        <Layout>
            <Row gutter={[16, 16]} style={{ padding: '16px 0' }}>
                <Col xl={8}>
                    <Card title="Thông tin" size="small">
                        <Row gutter={[8, 8]}>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text style={styleLabel}>ID:</Typography.Text>
                                    <Typography.Text>
                                        {user?._id}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text style={styleLabel}>Họ tên:</Typography.Text>
                                    <Typography.Text>
                                        {user?.fullName}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text style={styleLabel}>Email:</Typography.Text>
                                    <Typography.Text>
                                        {user?.email}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text style={styleLabel}>SĐT:</Typography.Text>
                                    <Typography.Text>
                                        {user?.phone}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text style={styleLabel}>Địa chỉ:</Typography.Text>
                                    <Typography.Text>
                                        {user?.address}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text style={styleLabel}>
                                        Thành phố:
                                    </Typography.Text>
                                    <Typography.Text>
                                        {user?.city}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text style={styleLabel}>
                                        Quận/Huyện:
                                    </Typography.Text>
                                    <Typography.Text>
                                        {user?.district}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text style={styleLabel}>
                                        Phường/Xã:
                                    </Typography.Text>
                                    <Typography.Text>
                                        {user?.subdistrict}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Row justify="end">
                                    <Col>
                                        <Button type="primary">Cập nhật</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card title="Tài khoản ngân hàng" size="small">
                        <Row gutter={[8, 8]}>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text style={styleLabel}>STK:</Typography.Text>
                                    <Typography.Text>
                                        {user?._id}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text style={styleLabel}>
                                        Tên ngân hàng:
                                    </Typography.Text>
                                    <Typography.Text>
                                        {user?.fullName}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Row justify="end">
                                    <Col>
                                        <Button type="primary">Cập nhật</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card title="Địa chỉ ví" size="small">
                        <Row gutter={[8, 8]}>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text>BTC:</Typography.Text>
                                    <Typography.Text>
                                        {user?._id}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text>BNB:</Typography.Text>
                                    <Typography.Text>
                                        {user?.fullName}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text>ETH:</Typography.Text>
                                    <Typography.Text>
                                        {user?.fullName}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text>TRX:</Typography.Text>
                                    <Typography.Text>
                                        {user?.fullName}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Typography.Text>USDT:</Typography.Text>
                                    <Typography.Text>
                                        {user?.fullName}
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <Row justify="end">
                                    <Col>
                                        <Button type="primary">Cập nhật</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
};

export default Info;
