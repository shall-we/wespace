import React from 'react';
import styles from './FolderList.scss';
import classNames from 'classnames/bind';
 
const cx = classNames.bind(styles);



const FolderItem = ({name,count}) => {
  return (
    <div className={cx('folder-item')} >
         {name}<span className={cx('item-count')}>{count}</span>
    </div>
  )
}

                
const FolderList = ({category}) => {


const folderName=[{name:'기획팀',count:2},{name:'회계팀',count:0},{name:'법무팀',count:5},{name:'개발1팀',count:2}];

const folderItems=folderName.map(
  ({name,count}) => ( <FolderItem name={name} count={count} key={name.id}/>)
);


  return (
  <div className={cx('folder-list')}>
       <div className={cx('folder-menu')}>
          <span className={cx('folder-category')}>{category}</span>
          <span className={cx('folder-option')} >+</span>          
       </div>
       <div className={cx('folder-items')}>
          {folderItems}
      </div>
  </div>)
};

export default FolderList;