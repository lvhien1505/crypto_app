import Layout from 'components/layout';
import { Card, Col, Row, Space, Typography } from 'antd';

const Payment = () => {
    const styleLabel = {
        fontWeight: 600,
    };

    return (
        <Layout>
            <Row gutter={[16, 16]} style={{ padding: '16px 0' }}>
                <Col xl={16}>
                    <Row gutter={[16, 16]}>
                        <Col xl={12}>
                            <Card title="Thông tin thanh toán" size="small">
                                <Typography.Title level={5} style={{color:'#4bac4d'}}>
                                    Số dư hiện tại : 30,000,000 VNĐ
                                </Typography.Title>
                                <Row gutter={[8, 8]}>
                                    <Col span={24}>
                                        <Space>
                                            <Typography.Text style={styleLabel}>
                                                Họ tên:
                                            </Typography.Text>
                                            <Typography.Text>
                                                Lê Văn Hiến
                                            </Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={24}>
                                        <Space>
                                            <Typography.Text style={styleLabel}>
                                                STK:
                                            </Typography.Text>
                                            <Typography.Text>
                                                Lê Văn Hiến
                                            </Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={24}>
                                        <Space>
                                            <Typography.Text style={styleLabel}>
                                                Tên ngân hàng:
                                            </Typography.Text>
                                            <Typography.Text>
                                                Lê Văn Hiến
                                            </Typography.Text>
                                        </Space>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card title="Hướng dẫn nạp tiền" size="small">
                                <Space direction="vertical">
                                    <Typography.Text>
                                        Họ tên : Lê Văn Hiến
                                    </Typography.Text>
                                    <Typography.Text>
                                        STK : 100867473739
                                    </Typography.Text>
                                    <Typography.Text>
                                        Tên ngân hàng : Vietinbank
                                    </Typography.Text>
                                </Space>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card title="Nạp tiền" size="small"></Card>
                        </Col>
                        <Col xl={12}>
                            <Card title="Rút tiền" size="small"></Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={8}>
                    <Card title="Lịch sử" size="small"></Card>
                </Col>
            </Row>
        </Layout>
    );
};

export default Payment;
