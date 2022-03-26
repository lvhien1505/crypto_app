import { Space, Image } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import millify from 'millify';

export const columns = [
    {
        title: 'Vị trí',
        dataIndex: 'rank',
        key: 'rank',
        align: 'center',
        width: 100,
    },
    {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
        render: (value, record) => (
            <>
                <Space>
                    <Image
                        className="crypto-image"
                        src={record.iconUrl}
                        height={32}
                        width={32}
                        preview={false}
                    />
                    <span style={{ fontWeight: 600 }}>{value}</span>
                    <span style={{ fontWeight: 600, color: record.color }}>
                        {record.symbol}
                    </span>
                </Space>
            </>
        ),
    },
    {
        title: 'Giá (USD)',
        dataIndex: 'price',
        key: 'price',
        render: (value) => (
            value ? <span style={{ fontWeight: 600 }}>${millify(value)}</span> : '-'
        ),
        align: 'center',
    },
    {
        title: '24h %',
        dataIndex: 'change',
        key: 'change',
        align: 'center',
        render: (value) => {
            if(!value) return '-'
            value = parseFloat(value);
            if (value < 0) {
                return (
                    <Space>
                        <CaretDownOutlined
                            style={{ fontWeight: 1000, color: '#ea3943' }}
                        />
                        <span style={{ fontWeight: 600, color: '#ea3943' }}>
                            {value}%
                        </span>
                    </Space>
                );
            }
            return (
                <Space>
                    <CaretUpOutlined
                        style={{ fontWeight: 1000, color: '#16c784' }}
                    />
                    <span style={{ fontWeight: 600, color: '#16c784' }}>
                        {value}%
                    </span>
                </Space>
            );
        },
    },
    {
        title: 'Vốn hóa thị trường',
        dataIndex: 'marketCap',
        key: 'marketCap',
        render: (value) => (
           value ? <span style={{ fontWeight: 600 }}>${millify(value)}</span> : '-'
        ),
        align: 'center',
    },
    {
        title: 'Khối lượng (24h)',
        dataIndex: '24hVolume',
        key: '24hVolume',
        align: 'center',
        render: (value) => {
            return (
                value ? <span style={{ fontWeight: 600 }}>${millify(value)}</span> : '-'
            );
        },
        align: 'end',
    },
];