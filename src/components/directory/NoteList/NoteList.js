import React from 'react';
import styles from './NoteList.scss';
import classNames from 'classnames/bind';
 
const cx = classNames.bind(styles);

const NoteItem = () => {
  return (
    <div className={cx('note-item')}>
     타이틀
    <div className={cx('date')}>2017-10-24</div>
    </div>
  )
}
const NoteList = () => (
  <div className={cx('note-list')}>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
    <NoteItem/>
  </div>
);

export default NoteList;