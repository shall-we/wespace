import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';

import logo from '../../../image/logo.png';
import miniLogo from '../../../image/mini-logo.png';

const cx = classNames.bind(styles);
 
const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to='/'>
        <img className={cx('logo')} src={logo} alt='logo'/>
        <img className={cx('mini-logo')} src={miniLogo} alt='mini-logo'/>
        </Link>
      </div>
      <div className={cx('right')}>
        { /* 조건에 따라 버튼 렌더링 */ }
        <Button theme='outline' to='/login'>로 그 인</Button>
        <Button theme='outline' to='/join'>회원가입</Button>
      </div>
    </div>
  </header>
);
 
export default Header;