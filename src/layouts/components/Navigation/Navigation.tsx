import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { NavList } from '~/interfaces';

import styles from './Navigation.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';

const cx = classNames.bind(styles);

interface PropsType {
  list: NavList[];
}

function Navigation({ list }: PropsType) {
  const currentUser = useSelector((state: RootState) => {
    return state.auth.login.currentUser;
  });

  return (
    <div className={cx('wrapper')}>
      <nav className={cx('wrapper-nav')}>
        {list.map((navigation) => {
          return (
            <NavLink
              key={navigation.id}
              to={navigation.link}
              className={(nav) => {
                return cx('nav-item', { active: nav.isActive });
              }}
            >
              {navigation.name}
            </NavLink>
          );
        })}
        {currentUser && (
          <NavLink
            to="/admin"
            className={(nav) => {
              return cx('nav-item', { active: nav.isActive });
            }}
          >
            Admin
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
