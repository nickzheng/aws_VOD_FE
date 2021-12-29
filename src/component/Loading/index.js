import PropTypes from 'prop-types';
import React from 'react';
import spannerImage from '../../assets/images/spinner.gif';
import styles from './index.less';

const Loading = ({ loading }) =>
  loading && (
    <div className={styles.loading}>
      <img className={styles.spanner} src={spannerImage} alt="loading" />
    </div>
  );

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
