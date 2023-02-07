import classNames from 'classnames/bind';

import styles from './AddLayout.module.scss';
import Navigate from './Navigate';

const cx = classNames.bind(styles);

interface PropsTypeAddLayout {
  children: React.ReactNode;
}

function AddLayout({ children }: PropsTypeAddLayout) {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <Navigate></Navigate>
        {children}
      </div>
    </div>
  );
}

export default AddLayout;
