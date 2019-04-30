import React from 'react';
import styles from './DirectoryPane.scss';
import classNames from 'classnames/bind';
import NoteList from '../NoteList';
import FolderList from '../FolderList';

const cx = classNames.bind(styles);

const DirectoryPane = ({ notes, setSidebarSection }) => {
	return (
        <div className={cx('sidebar')}>
            <div className={cx('forder')}>
                <div className={cx('forder-btn')}>문서관리</div>
                <FolderList category='PUBLIC'/>
                <FolderList category='PRIVATE'/>
            </div>
            <div className={cx('note')}>
         
                <NoteList/>
            </div>
        </div>
	);
};
 
export default DirectoryPane;



