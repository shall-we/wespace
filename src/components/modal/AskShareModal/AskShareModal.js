import React from "react";
import styles from "./AskShareModal.scss";
import classNames from "classnames/bind";
import ModalWrapper from "../ModalWrapper";
import Button from "../../common/Button";
import Selects from "../../common/Selects";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Members from 'components/common/ChipsArray';

// react-select
import AsyncSelectInput from "components/common/AsyncSelectInput";
import Grid from '@material-ui/core/Grid';

library.add(faUserFriends);

const cx = classNames.bind(styles);

class AskShareModal extends React.Component {
    state = {
        user: "",
        permission: "MEMBER"
    };

    handleChange = text => {
        this.setState({ permission: text.value });
    };

    render() {
        const { visible, onCancel, onConfirm, folder_id,
                modal_icon, modal_title, modal_content, btn_name } = this.props;

        return (
            <ModalWrapper visible={visible}>
                <div className={cx("question")}>
                    <div className={cx("title")}>
                        <FontAwesomeIcon icon={modal_icon} size="2x" color="#1C90FB" />
                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>{modal_title}</strong>
                    </div>
                    <br />                    
                    <div className={cx("description")}>{modal_content}</div>
                    <br /><br />
                    <AsyncSelectInput handleChange={this.handle} />
                    <br /><br />
                    {/* <h3>이름</h3> */}
                    <Members />
                    <br />

                    {/* <h3>권한</h3>
                    <Selects handleChange={this.handleChange} /> */}
                </div>

                <div className={cx("options")}>
                    <Button theme="outline" onClick={onCancel}>
                        취소
                    </Button>
                    <Button theme="outline"
                            onClick={() => {
                                console.log("user::", this.state.user,
                                            "----permission::", this.state.permission,
                                            "---folder_id::", folder_id);
                            }}
                    >{btn_name}</Button>
                </div>
            </ModalWrapper>
        );
    }
}
export default AskShareModal;
