import {
    Typography,
    Row,
    Col,
    Statistic,
    Card,
    Image,
    Divider,
    Table,
    Space,
    Spin,
} from 'antd';
import millify from 'millify';
import Layout from 'components/layout';
import TableCryptos from 'components/tables/TableCryptos';

import { useGetCryptosQuery } from 'services/cryptoApi';

import './styles/Homepage.scss';

const HomePage = () => {
    const { Title } = Typography;
    let count = 10;
    const { data, isFetching } = useGetCryptosQuery({ count, offset: 0 });
    const globalStats = data?.data?.stats;
    let topCoins = data?.data?.coins;
    if (topCoins) {
        if (topCoins.length > 0) {
            topCoins = topCoins.map((currency, index) => ({
                key: index,
                ...currency,
            }));
        }
    }

    return (
        <Layout>
            <Title level={3} className="heading">
                Thống kê Crypto toàn cầu
            </Title>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card hoverable className="coin-stats">
                        <Statistic
                            title="Tổng Coins"
                            value={isFetching ? '-' : globalStats.total}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="coin-stats" hoverable>
                        <Statistic
                            title="Tổng Exchanges"
                            value={
                                isFetching
                                    ? '-'
                                    : millify(globalStats.totalExchanges)
                            }
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="coin-stats" hoverable>
                        <Statistic
                            title="Tổng giá trị vốn hóa"
                            value={
                                isFetching
                                    ? '-'
                                    : millify(globalStats.totalMarketCap)
                            }
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="coin-stats" hoverable>
                        <Statistic
                            title="Tổng khối lượng giao dịch 24h"
                            value={
                                isFetching
                                    ? '-'
                                    : millify(globalStats.total24hVolume)
                            }
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="coin-stats" hoverable>
                        <Statistic
                            title="Tổng số Markets"
                            value={
                                isFetching
                                    ? '-'
                                    : millify(globalStats.totalMarkets)
                            }
                        />
                    </Card>
                </Col>
            </Row>
            <Divider style={{ marginBottom: '12px' }} />
            <div className="home-heading-container">
                <Title level={3} className="home-title">
                    Top 10 Cryptos trên thế giới
                </Title>
            </div>
            <TableCryptos data={topCoins || []} isLoading={isFetching} />
        </Layout>
    );
};

export default HomePage;
