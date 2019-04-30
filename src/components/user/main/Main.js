import React, { Component } from 'react';
import './Main.scss';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';

const modalcustom = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Main extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div className="intro">
                <div className="left-page">
                    <p class="maintext">
                        효과적인 팀워크 <br />
                        가벼워진 업무, <br />
                        <strong>협업툴 잔디</strong>
                    </p>
                    <p class="subtext">
                        이메일이 필요없는 간편한 소통과 파일 공유, <br />
                        빠른 피드백 확인까지. <br />
                        바라던 기능들을 모두 담았습니다. <br />
                    </p>
                    <br />
                </div>
                <div className="right-page">
                <button style={{background:'none', border:'none'}} class="Buttons">   
                <img
                  style={{cursor:'pointer', width:200}}
                  src="https://st2.depositphotos.com/1032749/9083/v/950/depositphotos_90833758-stock-illustration-play-button-tv-icon-design.jpg"
                  onClick={this.openModal}
                  alt=''
                  />
                  </button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={modalcustom}
                    >
                        <ReactPlayer
                            url='https://youtu.be/PL9iyA3dZ9I'
                            controls playing
                        />      
                    </Modal>
            </div>
            </div>
                );
            }
        }
        
export default Main;