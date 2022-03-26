import { Card, Row,Col, Typography } from 'antd';
import styles from './styles/auth.module.scss'

const Auth = ({ children,title }) => {
    return (
        <Row justify="center" align='middle' className={styles["auth-container"]}>
            <Col xl={8} className={styles["auth"]}>
                <Card bordered>
                    <Typography.Title level={3} style={{textAlign:'center'}}>
                        {title}
                    </Typography.Title>
                    {children}
                </Card>
            </Col>
        </Row>
    );
};

export default Auth;
