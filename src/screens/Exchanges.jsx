import {
    Button,
    Card,
    Col,
    Form,
    Image,
    List,
    Row,
    Space,
    Tabs,
    Typography,
    Input,
} from 'antd';
import Layout from 'components/layout';
import img_btc from 'assets/images/bitcoin_btc.svg';
import img_bnb from 'assets/images/bnb.svg';
import img_eth from 'assets/images/eth.svg';
import img_trx from 'assets/images/trx.svg';
import img_usdt from 'assets/images/usdt.svg';
import { FlagFilled } from '@ant-design/icons';

const CardTittle = () => (
    <Space align="center">
        <Image src={img_btc} height={32} width={32} preview={false} />
        <Typography.Title level={5} style={{ margin: 0 }}>
            Bitcoin - BTC
        </Typography.Title>
    </Space>
);
const Exchanges = () => {
    const { Item } = List;
    return (
        <Layout>
            <Row style={{ padding: '16px 0' }} gutter={[16, 16]}>
                <Col xl={16}>
                    <Row>
                        <Col span={24}>
                            <Card size="small" bordered>
                                <Row justify="space-between">
                                    <Col>
                                        <CardTittle />
                                    </Col>
                                    <Col>
                                        <Button type="primary">
                                            Chọn coin khác
                                        </Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '16px' }} gutter={[16, 16]}>
                        <Col span={12}>
                            <Card
                                size="small"
                                bordered
                            >
                                <Row>
                                    <Col span={24}>
                                        <Space>
                                            <FlagFilled style={{ color: '#4bac4d' }}/>
                                            <Typography.Text>
                                                Giá mua:
                                            </Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={24}>
                                        <Typography.Title level={3} style={{ color: '#4bac4d' }}>
                                            987,654,321 VND
                                        </Typography.Title>
                                    </Col>
                                    <Col span={24}>
                                        <Button
                                            style={{
                                                backgroundColor: '#4bac4d',
                                                color: '#fff',
                                            }}
                                        >
                                            Mua ngay
                                        </Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                size="small"
                                bordered
                            >
                                <Row>
                                    <Col span={24}>
                                        <Space>
                                            <FlagFilled style={{ color: '#da624a' }}/>
                                            <Typography.Text>
                                                Giá bán:
                                            </Typography.Text>
                                        </Space>
                                    </Col>
                                    <Col span={24}>
                                        <Typography.Title level={3} style={{ color: '#da624a' }}>
                                            987,654,321 VND
                                        </Typography.Title>
                                    </Col>
                                    <Col span={24}>
                                        <Button
                                            style={{
                                                backgroundColor: '#da624a',
                                                color: '#fff',
                                            }}
                                        >
                                            Bán ngay
                                        </Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '16px' }}>
                        <Col span={24}>
                            <Card size="small" bordered>
                                <Typography.Title
                                    level={4}
                                    style={{ textAlign: 'center' }}
                                >
                                    Giao dịch mua BTC
                                </Typography.Title>
                                <Form
                                    style={{ width: '500px', margin: '0 auto' }}
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Form.Item label="Chúng tôi còn">
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Số lượng cần mua">
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Thành tiền">
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Địa chỉ ví">
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Mã Captcha">
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{ offset: 8, span: 16 }}
                                    >
                                        <Button type="primary">Tiếp tục</Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={8}>
                    <Card size="small" title="Lịch sử" bordered>
                        <List>
                            <Item>
                                <Space direction="vertical">
                                    <Typography.Text>
                                        lvhien1505 vừa mua USDT với giá 23,000
                                        VND
                                    </Typography.Text>
                                    <Typography.Text>
                                        5 phút trước
                                    </Typography.Text>
                                </Space>
                            </Item>
                            <Item>
                                <Space direction="vertical">
                                    <Typography.Text>
                                        lvhien1505 vừa mua USDT với giá 23,000
                                        VND
                                    </Typography.Text>
                                    <Typography.Text>
                                        5 phút trước
                                    </Typography.Text>
                                </Space>
                            </Item>
                            <Item>
                                <Space direction="vertical">
                                    <Typography.Text>
                                        lvhien1505 vừa mua USDT với giá 23,000
                                        VND
                                    </Typography.Text>
                                    <Typography.Text>
                                        5 phút trước
                                    </Typography.Text>
                                </Space>
                            </Item>
                        </List>
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
};

export default Exchanges;
