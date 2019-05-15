import React from 'react';
import styles from './FolderList.scss';
import classNames from 'classnames/bind';
 
const cx = classNames.bind(styles);



const FolderItem = ({name,count,key}) => {
  return (
    <div className={cx('folder-item')} >
         {name}<span className={cx('item-count')} key={key} >{count}</span>
    </div>
  )
}

                
const FolderList = ({category,handleVisiable}) => {


const folderName=[{name:'기획팀',count:2},{name:'회계팀',count:0},{name:'법무팀',count:5},{name:'개발1팀',count:2}];

const folderItems=folderName.map(
  ({name,count}) => ( <FolderItem name={name} count={count} key={name.id} />)
);



  return (
  <div className={cx('folder-list')}>
       <div className={cx('folder-menu')}>
          <span className={cx('folder-category')}>{category}</span>   
       </div>
       <div className={cx('folder-items')} onClick={()=>handleVisiable()}>
          {folderItems}
      </div>
  </div>)
};

export default FolderList;