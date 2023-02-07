import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { NavList } from '~/interfaces';

import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  list: NavList[];
}

function Navigation({ list }: PropsType) {
  const currentUser = {};

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
            Quản trị viên
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
