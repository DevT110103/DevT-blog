import classNames from 'classnames/bind';

import styles from './CardAdmin.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export interface PropsTypeCardAdmin {
  img: string;
  title: string;
}

function CardAdmin({ img, title }: PropsTypeCardAdmin) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-control')}>
        <button
          className={cx('btn', {
            edit: true,
          })}
        >
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
        </button>
        <button
          className={cx('btn', {
            delete: true,
          })}
        >
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
      </div>
      <div className={cx('top-card')}>
        <img src={img} alt="" />
      </div>
      <div className={cx('mid-card')}>
        <p className={cx('title')}>
          <Link className={cx('link')} to={'#'}>
            {title}
          </Link>
        </p>
      </div>
      <div className={cx('bot-card')}></div>
    </div>
  );
}

export default CardAdmin;
