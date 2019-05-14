import React from "react";
import styles from "./AskShareModal.scss";
import classNames from "classnames/bind";
import ModalWrapper from "../ModalWrapper";
import Button from "../../common/Button";
import OutlinedTextField from "../../material/OutlinedTextField";
import Selects from '../../common/Selects';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUserFriends);

const cx = classNames.bind(styles);

class AskShareModal extends React.Component {

    state={
        user:'',
        permission:'MEMBER',
    }

    handleChange=(text)=>{

        this.setState({permission:text.value});
    }
 
   render(){
   const {visible,onCancel,onConfirm,folder_id}=this.props;
   
   return <ModalWrapper visible={visible}>
                <div className={cx("question")}>
                    <div className={cx("title")}>
                        <FontAwesomeIcon icon="user-friends" size="2x" color="#1C90FB" />
                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>OOO&nbsp; 공유 폴더</strong>
                    </div>
                    <br />
                    <div className={cx("description")}>
                        해당 폴더로 초대할 인원을 선택해주세요.
                    </div>
                    <br />
                    <h3>이름</h3>
                    <OutlinedTextField handleText={(e)=>this.setState({user:e.target.value})}/>
                    
                    <h3>권한</h3>
                    <Selects handleChange={this.handleChange}/>
                    <br />
                    <br />
                </div>

                <div className={cx("options")}>
                    <Button theme='outline' onClick={onCancel}>
                        취소
                    </Button>
                    <Button theme='outline' onClick={()=>{
                        console.log('user::',this.state.user,'----permission::',this.state.permission,'---folder_id::',folder_id);
                    }}>초대</Button>
                </div>
            </ModalWrapper>
        };
}
export default AskShareModal;
