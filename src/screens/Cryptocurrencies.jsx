import { Col, Row } from 'antd';
import { useState } from 'react';
import { useGetCryptosQuery } from 'services/cryptoApi';
import Layout from 'components/layout';
import TableCryptos from 'components/tables/TableCryptos';
import SearchCryptos from 'components/search/SearchCryptos';
import ModalCryptoDetail from 'components/modals/ModalCryptoDetail';

const Cryptocurrencies = () => {
    let count = 50;
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);
    const { data: cryptosList, isFetching } = useGetCryptosQuery({
        count,
        offset,
    });
    const [cryptoSelected, setCryptoSelected] = useState({});
    let cryptos = cryptosList?.data?.coins;
    const globalStats = cryptosList?.data?.stats;

    const onChangePage = (page) => {
        page = parseInt(page);
        setCurrentPage(page);
        setOffset((page - 1) * 50);
    };
    const configPagination = {
        position: ['bottomLeft'],
        current: currentPage,
        pageSize: 50,
        total: globalStats ? globalStats.total : 13432,
        showSizeChanger: false,
        onChange: onChangePage,
    };

    const onRow = (record) => {
        return {
            onClick: (e) => {
                setCryptoSelected(record);
            },
        };
    };

    const onSelect = (currency) => {
        setCryptoSelected(currency);
    };

    return (
        <Layout>
            <Row className="search-crypto" style={{ padding: '24px 0 16px 0' }}>
                <Col span={8}>
                    <SearchCryptos onSelect={onSelect} />
                </Col>
            </Row>
            <TableCryptos
                pagination={configPagination}
                data={cryptos}
                simplified={false}
                isLoading={isFetching}
                onRow={onRow}
            />
            <ModalCryptoDetail
                visible={cryptoSelected.name ? true : false}
                onCancel={() => setCryptoSelected({})}
            />
        </Layout>
    );
};

export default Cryptocurrencies;
