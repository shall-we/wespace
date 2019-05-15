import React from "react";
import styles from "./OneInputModal.scss";
import classNames from "classnames/bind";
import ModalWrapper from "../ModalWrapper";
import Button from "../../common/Button";
import OutlinedTextField from "../../material/OutlinedTextField";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserFriends, faFileAlt, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUserFriends);
library.add(faFileAlt);
library.add(faFileSignature);

const cx = classNames.bind(styles);

class OneInputModal extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            folder_name: '',
            // modal_title: '222'
        };
    };


    handleTextChange = (event) => {
        this.setState({ folder_name: event.target.value });
    };

    render(){
        const { visible, onConfirm, onCancel, user_id,
                modal_icon, modal_title, modal_content, btn_name } = this.props;

        const { handleTextChange } = this;
        return (
            <ModalWrapper visible={visible}>
                <div className={cx("question")}>
                    <div className={cx("title")}>
                        <FontAwesomeIcon icon={modal_icon} size="2x" color="#1C90FB" />
                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>{modal_title}</strong>
                    </div>
                    <br />
                    <div className={cx("description")}>
                        {modal_content}
                    </div>
                    <br />
                    {/* <h3>폴더명</h3> */}
                    <OutlinedTextField handleText={handleTextChange}/>
                </div>

                <div className={cx("options")}>
                    <Button theme='outline' onClick={onCancel}>취소</Button>
                    <Button theme='outline' onClick={()=>{onConfirm(this.state.folder_name,user_id); onCancel();}}>
                        {btn_name}
                    </Button>
                </div>
            </ModalWrapper>
        )
    }
}

export default OneInputModal;
