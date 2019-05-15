import React from "react";
import styles from "./NoticeModal.scss";
import classNames from "classnames/bind";
import ModalWrapper from "../ModalWrapper";
import Button from "../../common/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShareSquare, faTrashAlt, faFilePdf, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add fontawesome icons
library.add(faShareSquare);
library.add(faTrashAlt);
library.add(faFilePdf);
library.add(faKey);

const cx = classNames.bind(styles);

class NoticeModal extends React.Component {
    static defaultProps = {
        modal_icon: 'share-square'
    };

    handleIcon = () => {
        this.setState(
            ({icon}) => ({
                modal_icon: icon
            })
        );
    }

    render() {
        const { visible, onConfirm, onCancel, folder_id,
                modal_icon, modal_title, modal_content, btn_name } = this.props;

        return (
            <ModalWrapper visible={visible}>
                <div className={cx("question")}>
                    <div className={cx("title")}>
                        <FontAwesomeIcon icon={modal_icon} size="2x" color="#1C90FB" />
                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>{modal_title}</strong>
                    </div>

                    <br /><br />

                    <div className={cx("description")}>
                        {modal_content}
                    </div>
                    
                    <br />
                </div>

                <div className={cx("options")}>
                    <Button theme="outline" onClick={onCancel}>취소</Button>
                    <Button theme="outline" onClick={() => { onConfirm(folder_id); onCancel(); }}>
                        {btn_name}
                    </Button>
                </div>
            </ModalWrapper>
        );
    }
}

export default NoticeModal;
