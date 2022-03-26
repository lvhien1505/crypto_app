import { useState, useRef } from 'react';
import { Input, List, Image, Spin, Button } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import millify from 'millify';
import { useSearchCryptoMutation } from 'services/cryptoApi';

import './styles/dropdown.scss';

const DropdownSearch = ({ data, onSelect }) => {
    const { Item } = List;

    return (
        <div className="dropdown-search">
            {data.length > 0 ? (
                <>
                    <List>
                        {data.map((currency, index) => (
                            <Item
                                key={index}
                                onClick={() => onSelect(currency)}
                                className="currency-item"
                            >
                                <Item.Meta
                                    avatar={
                                        <Image
                                            src={currency.iconUrl}
                                            height={32}
                                            width={32}
                                            preview={false}
                                        />
                                    }
                                    title={
                                        <span>
                                            {currency.name} - {currency.symbol}
                                        </span>
                                    }
                                    description={
                                        currency.price
                                            ? `$${millify(currency.price)}`
                                            : '-'
                                    }
                                />
                            </Item>
                        ))}
                    </List>
                </>
            ) : (
                <div
                    style={{
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Spin />
                </div>
            )}
        </div>
    );
};

const SearchCryptos = ({ onSelect }) => {
    const [searchCrypto, { isLoading }] = useSearchCryptoMutation();
    const [isSearch, setIsSearch] = useState(false);
    const [cryptos, setCryptos] = useState([]);
    let timer = null;

    const onChange = (e) => {
        let value = e.target.value;
        if (!value) {
            return;
        }
        clearTimeout(timer);

        timer = setTimeout(async () => {
            let res = await searchCrypto(value.toLowerCase());
            setCryptos(res.data.data.coins);
        }, 1000);
    };

    const onHandleSelect = (currency) => {
        onSelect(currency);
        setIsSearch(false)
    };
 
    return (
        <div style={{ position: 'relative' }}>
            <Input
                placeholder="Tìm kiếm"
                prefix={<SearchOutlined />}
                onChange={onChange}
                onFocus={() => setIsSearch(true)}
            />
            {isSearch ? (
                <DropdownSearch data={cryptos} onSelect={onHandleSelect} />
            ) : null}
        </div>
    );
};

export default SearchCryptos;
