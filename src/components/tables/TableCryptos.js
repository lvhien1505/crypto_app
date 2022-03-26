import { Table } from 'antd';
import { columns } from './columns';
import PropTypes from 'prop-types';

const TableCryptos = ({ data, simplified, isLoading,...rest }) => {
    if (simplified) {
        return (
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                size={'middle'}
                loading={isLoading}
            />
        );
    }


    return (
        <Table
            columns={columns}
            dataSource={data}
            size={'middle'}
            loading={isLoading}
            {...rest}
        />
    );
};

TableCryptos.defaultProps = {
    simplified: true,
    data: [],
    isLoading: true,
};

TableCryptos.propTypes = {
    simplified: PropTypes.bool,
    data: PropTypes.array,
    isLoading: PropTypes.bool,
};

export default TableCryptos;
