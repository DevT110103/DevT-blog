import classNames from 'classnames/bind';

import styles from './AdminLayout.module.scss';
import Header from '../components/Header';
import AdminControl from '~/components/AdminControl';

const cx = classNames.bind(styles);

interface PropsTypeAdminLayout {
  children: React.ReactNode;
}

function AdminLayout({ children }: PropsTypeAdminLayout) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>

      <div className="container">
        <div className={cx('wrapper-container')}>{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
