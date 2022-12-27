import classNames from 'classnames/bind';

import styles from './TagIcon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PropsTypeTagIcon {
  icon: React.ReactNode;
  name: string;
  blank?: boolean;
  to: string;
}

function TagIcon({ icon, name, blank, to }: PropsTypeTagIcon) {
  return (
    <div className={cx('wrapper')}>
      {icon}
      {blank ? (
        <a className={cx('link')} href={to} target="_blank" rel="noreferrer">
          {name}
        </a>
      ) : (
        <Link to="#" className={cx('link')}>
          {name}
        </Link>
      )}
    </div>
  );
}

export default TagIcon;
