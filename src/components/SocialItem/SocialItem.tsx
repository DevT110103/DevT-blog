import classNames from 'classnames/bind';

import styles from './SocialItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PropsTypeSocialItem {
  target?: string;
  href?: string;
  to?: string;
  rel?: string;
  icon: React.ReactNode;
}

function SocialItem({ target, href, rel, icon, to }: PropsTypeSocialItem) {
  return (
    <div className={cx('wrapper')}>
      {!!to ? (
        <Link to={to}>
          <div className={cx('icon')}>{icon}</div>
        </Link>
      ) : (
        <a target={target} href={href} rel={rel}>
          <div className={cx('icon')}>{icon}</div>
        </a>
      )}
    </div>
  );
}

export default SocialItem;
