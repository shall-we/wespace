import React from "react";
import styles from "./DeleteFolderModal.scss";
import classNames from "classnames/bind";
import ModalWrapper from "../ModalWrapper";
import Button from "../../common/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShareSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faShareSquare);
library.add(faTrashAlt);

const cx = classNames.bind(styles);

class DeleteFolderModal extends React.Component {
    render() {
        const { visible, onConfirm, onCancel, folder_id, describe } = this.props;

        return (
            <ModalWrapper visible={visible}>
                <div className={cx("question")}>
                    <div className={cx("title")}>
                        <FontAwesomeIcon
                            icon="trash-alt"
                            size="2x"
                            color="#1C90FB"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>공유 폴더 삭제</strong>
                    </div>
                    <br />
                    <br />
                    <div className={cx("description")}>
                        {describe}
                    </div>
                    <br />
                </div>
                <div className={cx("options")}>
                    <Button theme="outline" onClick={onCancel}>
                        취소
                    </Button>
                    <Button theme="outline" onClick={() => {
                        onConfirm(folder_id);
                    }}>삭제</Button>
                </div>
            </ModalWrapper>
        );
    }
}

export default DeleteFolderModal;
