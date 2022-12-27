import classNames from 'classnames/bind';

import styles from './SideBarInfo.module.scss';
import Button from '../Button';
import TagIcon from '../TagIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';

const cx = classNames.bind(styles);

interface PropsTypeSideBarInfo {}

function SiderBar({}: PropsTypeSideBarInfo) {
  const currentUser = useSelector((state: RootState) => {
    return state.auth.login.currentUser;
  });
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>Giới thiệu</h3>
      <div className={cx('wrapper-desc')}>
        <p className={cx('desc')}>Every day trying a little harder is better than you were yesterday 🖤</p>
        {currentUser && <Button className={cx('btn')}>Chỉnh sửa tiểu sử</Button>}
      </div>
      <div className={cx('wrapper-info')}>
        <TagIcon to="#" icon={<FontAwesomeIcon icon={faHome}></FontAwesomeIcon>} name="Sống tại thành phố Hồ Chí Minh"></TagIcon>
        <TagIcon to="#" icon={<FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>} name="Đến từ Bình Chánh"></TagIcon>
        <TagIcon to="#" icon={<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>} name="Độc thân"></TagIcon>
        <TagIcon
          blank={true}
          to="https://www.instagram.com/tai_leeeee/"
          icon={<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>}
          name="Tai_leee"
        ></TagIcon>
      </div>
    </div>
  );
}

export default SiderBar;
