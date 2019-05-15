import React, { Component } from 'react';
import styles from './DirectoryTemplate.scss';
import classNames from 'classnames/bind';
 
const cx = classNames.bind(styles);

class DirectoryTemplate extends Component {
  
    render() {
      const { header, directory, note } = this.props;
     
      return (
        <div className={cx('editor-template')}>
          {header}
          <div className={cx('panes')}>
            <div className={cx('pane')}  >
              {directory}
            </div>
            <div className={cx('pane')}>
              {note}
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default DirectoryTemplate;