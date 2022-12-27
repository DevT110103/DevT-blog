import classNames from 'classnames/bind';

import styles from './AdminLayout.module.scss';
import Header from '../components/Header';

const cx = classNames.bind(styles);

interface PropsTypeAdminLayout {
  children: React.ReactNode;
}

function AdminLayout({ children }: PropsTypeAdminLayout) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      <div className="container">{children}</div>
    </div>
  );
}

export default AdminLayout;
