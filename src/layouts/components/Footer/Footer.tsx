import classNames from 'classnames/bind';
import { Row, Col } from 'antd';

import styles from './Footer.module.scss';
import PostCardCircle from '~/components/PostCardCircle';
import TagCloud from '~/components/TagCloud';
import TitleBar from '~/components/TitleBar';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-about')}>
        <Row gutter={[32, 32]}>
          <Col span={24} lg={{ span: 8 }}>
            <TitleBar>Latest Articles</TitleBar>
            <PostCardCircle
              date="Thứ 3, 12 năm 2022"
              title="The spectacle before us was indeed sublime"
              image="http://ghost.estudiopatagon.com/rein/content/images/size/w160h160/2019/07/photo-1530021232320-687d8e3dba54.jpg"
              swap
            ></PostCardCircle>
            <PostCardCircle
              date="Thứ 3, 12 năm 2022"
              title="The spectacle before us was indeed sublime"
              image="http://ghost.estudiopatagon.com/rein/content/images/size/w160h160/2019/07/photo-1530021232320-687d8e3dba54.jpg"
              swap
            ></PostCardCircle>
            <PostCardCircle
              date="Thứ 3, 12 năm 2022"
              title="The spectacle before us was indeed sublime"
              image="http://ghost.estudiopatagon.com/rein/content/images/size/w160h160/2019/07/photo-1530021232320-687d8e3dba54.jpg"
              swap
            ></PostCardCircle>
          </Col>
          <Col span={24} lg={{ span: 8 }}>
            <TitleBar>Tag cloud</TitleBar>
            <div className={cx('wrapper-tag-cloud')}>
              <TagCloud className={cx('tag-cloud')} tag="Getting Started"></TagCloud>
              <TagCloud className={cx('tag-cloud')} tag="Health"></TagCloud>
              <TagCloud className={cx('tag-cloud')} tag="Lifestyle"></TagCloud>
              <TagCloud className={cx('tag-cloud')} tag="Places"></TagCloud>
              <TagCloud className={cx('tag-cloud')} tag="Technology"></TagCloud>
            </div>
          </Col>
          <Col span={24} lg={{ span: 8 }}>
            <TitleBar>About me</TitleBar>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
