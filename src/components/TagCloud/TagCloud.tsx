import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './TagCloud.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  tag: string;
  to?: string;
  className?: string;
}

function TagCloud({ tag, to = '/', className = '' }: PropsType) {
  return (
    <div
      className={cx('wrapper', {
        [className]: className,
      })}
    >
      <Link to={to} className={cx('title-img')}>
        <FontAwesomeIcon className={cx('icon-title-img')} icon={faCircle}></FontAwesomeIcon>
        {tag}
      </Link>
    </div>
  );
}

export default TagCloud;
