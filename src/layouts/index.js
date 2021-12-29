import React from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import { router } from 'umi';
import { HomeIcon, PostIcon } from '../component/Icons';
import inslogo from '../assets/images/inslogo.png';
import styles from './index.less';
export default function Layout({ children }) {
  const token = localStorage.getItem('accessToken');
  let decoded = {};
  try {
    decoded = jwt_decode(token) || {};
  } catch (e) {
    console.log('e', e);
  }

  const onLogout = () => {
    localStorage.clear();
    router.push('/login');
  };
  return (
    <div className={styles.page}>
      {window.location.hash !== '#/login' ? (
        <div className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.imagelogo} src={inslogo} />
          </div>
          <div className={styles.action}>
            {decoded?.username === 'admin' ? (
              <a href="#/upload" className={styles.post}>
                <PostIcon />
              </a>
            ) : null}
            <a href="#/" className={styles.home}>
              <HomeIcon />
            </a>
            <div className={styles.username}>{decoded?.username}</div>
            <a className={styles.logout} onClick={onLogout}>
              logout
            </a>
          </div>
        </div>
      ) : null}
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
