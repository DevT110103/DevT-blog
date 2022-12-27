import classNames from 'classnames/bind';

import styles from './MenuControl.module.scss';
import MenuItem from './MenuItem';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import configs from '~/configs';

const cx = classNames.bind(styles);

interface PropsTypeMenuControl {}

function MenuControl({}: PropsTypeMenuControl) {
  return (
    <div className={cx('wrapper')}>
      <MenuItem to={configs.routes.author} icon={<FontAwesomeIcon className={cx('icon')} icon={faUser} />}>
        Profile
      </MenuItem>
      <MenuItem icon={<FontAwesomeIcon icon={faGear}></FontAwesomeIcon>}>Setting</MenuItem>
      <MenuItem icon={<FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>}>Log out</MenuItem>
    </div>
  );
}

export default MenuControl;
