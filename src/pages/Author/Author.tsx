import classNames from 'classnames/bind';

import styles from './Author.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import CardTus from '~/components/CardTus';
import PostCard from '~/components/PostCard';
import { Col, Row } from 'antd';
import SideBarInfo from '~/components/SideBarInfo';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';

const cx = classNames.bind(styles);

function Author() {
  document.title = 'Author page';
  const currentUser = useSelector((state: RootState) => {
    return state.auth.login.currentUser;
  });

  return (
    <div className="container">
      <div className={cx('wrapper')}>
        <div
          className={cx('wrapper-cover-img')}
          style={{
            backgroundImage: `url("https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/278237850_1612474219152678_5463084588818834881_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=iPZj0-NSjGIAX8J3aor&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfA529UcTNkCqbOKXle-zRWI-qevSV2OMfbWq4EWHiCmDw&oe=63A580BA")`,
          }}
        >
          <div className={cx('wrapper-avatar')}>
            <div className={cx('avatar')}>
              <img
                src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/311977866_1754859381580827_3197983757486709313_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=CWyJW4MVTr0AX9ftHR6&_nc_oc=AQncOBKdzzHc_QNOyXRyQgavXGWl1CTolq3A2m9cORWxnzJ576DCbPgw0KH7VBeSlAE&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDQCoitEKBvk5vktUKdC-KAOuyUvo9sZWrFfBemX89eBw&oe=63A6435D"
                alt=""
              />
            </div>
            <div className={cx('wrapper-control')}>
              <div className={cx('short-info')}>
                <p className={cx('name')}>Lê Tài</p>
                <p className={cx('friend')}>867 bạn bè</p>
              </div>
              {currentUser ? (
                <div className={cx('control')}>
                  <Button>
                    <span className={cx('btn')}>Chỉnh sửa trang cá nhân</span>
                    <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
                  </Button>
                </div>
              ) : (
                <div className={cx('control')}>
                  <Button>
                    <span className={cx('btn')}>Kết bạn</span>
                    <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                  </Button>
                  <Button>
                    <span className={cx('btn')}>Theo dõi</span>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={cx('wrapper-content')}>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 6 }}>
              <SideBarInfo></SideBarInfo>
            </Col>
            <Col span={24} lg={{ span: 18 }}>
              <CardTus></CardTus>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Author;
