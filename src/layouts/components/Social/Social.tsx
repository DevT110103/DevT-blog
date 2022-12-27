import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import configs from '~/configs';

import styles from './Social.module.scss';
import SocialItem from '~/components/SocialItem';
import { CurrentUser as ICurrentUser } from '~/interfaces';
import CurrentUser from '~/components/CurrentUser';

const cx = classNames.bind(styles);

interface TypePropsSocial {
  currentUser: ICurrentUser;
}

function Social({ currentUser }: TypePropsSocial) {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className={cx('wrapper-control')}>
          <div className={cx('social-inner')}>
            <SocialItem
              href="https://www.facebook.com/TaiLe1101"
              icon={<FontAwesomeIcon className={cx('icon')} icon={faFacebookF} />}
              target="_blank"
              rel="noreferrer"
            ></SocialItem>
            <SocialItem
              href="https://www.facebook.com/TaiLe1101"
              icon={<FontAwesomeIcon className={cx('icon')} icon={faTwitter} />}
              target="_blank"
              rel="noreferrer"
            ></SocialItem>
            <SocialItem
              href="https://www.instagram.com/tai_leeeee/"
              icon={<FontAwesomeIcon className={cx('icon')} icon={faInstagram} />}
              target="_blank"
              rel="noreferrer"
            ></SocialItem>
          </div>

          <div className={cx('login-inner')}>
            {Object.keys(currentUser).length > 0 ? (
              <CurrentUser avatar="https://picsum.photos/200"></CurrentUser>
            ) : (
              <SocialItem to={configs.routes.login} icon={<FontAwesomeIcon className={cx('icon')} icon={faUser} />}></SocialItem>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
