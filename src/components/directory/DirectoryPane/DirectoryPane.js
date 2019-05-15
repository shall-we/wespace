import React from 'react';
import styles from './DirectoryPane.scss';
import classNames from 'classnames/bind';
import NoteList from '../NoteList';
import FolderList from '../FolderList';

const cx = classNames.bind(styles);

class DirectoryPane extends React.Component{
    state = {
        visiable:true,
        leftPercentage:0.5
      }
      handleNavigation=(e)=>{
        if(this.state.visiable)
        this.setState({leftPercentage:1,visiable:false});
        else
        this.setState({leftPercentage:0.5,visiable:true});
      }
      handleVisiable=(e)=>{
        if(!this.state.visiable)
        this.setState({leftPercentage:0.5,visiable:true});
      }
    
    render(){
        const { leftPercentage,visiable } = this.state;
      const { handleNavigation,handleVisiable } = this;
   
      const sidebarStyle={
          
        width:`${25 - (visiable?0:13)}rem`
      }

      // 각 영역에 flex 값 적용
      const leftStyle = {
        flex: leftPercentage
      };
      const rightStyle = {
        flex: 1 - leftPercentage
      };
   
      // separator 위치 설정
      const separatorStyle = {
        left: `${25 - (visiable?0:13)}rem`
      };
  
      const visiableStyle={
        display:`${(visiable)?'block':'none'}`,
        
      }
      const noneVisiableStyle={
        display:`${(!visiable)?'block':'none'}`
      }

	return (
        <div className={cx('sidebar')} style={sidebarStyle}>
            <div className={cx('forder')} style={leftStyle} >
                <div className={cx('forder-btn')}>폴더생성</div>
                <FolderList category='PUBLIC' handleVisiable={handleVisiable}/>
                <FolderList category='PRIVATE' handleVisiable={handleVisiable}/>
            </div>
            <div className={cx('note')} style={rightStyle} >
                <NoteList/>
            </div>
            <div 
              className={cx('separator')} 
              style={separatorStyle}>
              <img className={cx('separator-btn')}  style={visiableStyle} src='https://cdn.pixabay.com/photo/2017/06/20/14/55/icon-2423347_960_720.png' alt='' onClick={handleNavigation}/>
              <img className={cx('separator-btn')}  style={noneVisiableStyle} src='https://icon2.kisspng.com/20180207/ajq/kisspng-arrow-button-clip-art-turn-right-arrow-5a7af261b365c3.4890259215180068817348.jpg' alt='' onClick={handleNavigation}/>
              </div>
        </div>
    );
}
};
 
export default DirectoryPane;



