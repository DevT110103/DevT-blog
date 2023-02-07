import classNames from 'classnames/bind';

import styles from './Navigate.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import configs from '~/configs';

const cx = classNames.bind(styles);

interface PropsTypeNavigate {}

function Navigate({}: PropsTypeNavigate) {
  const navigate = useNavigate();

  return (
    <div className={cx('wrapper')}>
      <Link to={configs.routes.admin} className={cx('btn-back')}>
        <FontAwesomeIcon className={cx('icon')} icon={faArrowAltCircleLeft}></FontAwesomeIcon>
        <span> Trở về trang Quản trị viên</span>
      </Link>
    </div>
  );
}

export default Navigate;
