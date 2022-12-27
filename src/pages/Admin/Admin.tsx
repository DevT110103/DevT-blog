import classNames from 'classnames/bind';

import styles from './Admin.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeAdmin {}

function Admin({}: PropsTypeAdmin) {
  document.title = 'Admin Page';
  return <div className={cx('wrapper')}>admin page</div>;
}

export default Admin;
