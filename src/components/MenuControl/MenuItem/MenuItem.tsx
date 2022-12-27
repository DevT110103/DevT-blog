import classNames from 'classnames/bind';

import styles from './MenuItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PropsTypeMenuItem {
  icon: React.ReactNode;
  children: string;
  to?: string;
}

function MenuItem({ icon, children, to = '#' }: PropsTypeMenuItem) {
  return (
    <div className={cx('wrapper')}>
      <Link to={to} className={cx('control')}>
        {icon}
        <p className={cx('text')}>{children}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
