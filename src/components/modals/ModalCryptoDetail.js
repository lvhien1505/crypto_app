import { Modal } from 'antd';

const ModalCryptoDetail = ({ visible, onCancel }) => {
    return (
        <Modal visible={visible} footer={null} onCancel={onCancel} title="Thông tin coin">
            ModalCryptoDetail
        </Modal>
    );
};

export default ModalCryptoDetail;
