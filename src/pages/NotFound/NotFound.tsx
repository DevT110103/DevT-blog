import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';
import configs from '~/configs';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NotFound() {
  document.title = '404 Not Found';
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <Link to={configs.routes.home} className={cx('not-found')}>
          <h1>404 Not Found</h1>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
