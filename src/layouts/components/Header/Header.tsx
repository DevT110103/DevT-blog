import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Social from '../Social';
import Navigation from '../Navigation';
import { navList } from './store';
import { useEffect, useState } from 'react';
import { CurrentUser } from '~/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';

const cx = classNames.bind(styles);

function Header() {
  const currentUserApi = useSelector((state: RootState) => {
    return state.auth.login.currentUser;
  });
  const [currentUser, setCurrentUser] = useState<CurrentUser>({});

  useEffect(() => {
    if (currentUserApi) {
      setCurrentUser(currentUserApi);
    } else {
      setCurrentUser({});
    }
  }, [currentUserApi]);

  return (
    <div className={cx('wrapper')}>
      <Social currentUser={currentUser} />
      <div className="container">
        <div className="header-inner">
          <h1 className={cx('title')}>Dev T</h1>
          <Navigation list={navList} />
        </div>
      </div>
    </div>
  );
}

export default Header;
