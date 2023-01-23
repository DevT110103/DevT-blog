import classNames from 'classnames/bind';

import styles from './CardTus.module.scss';
import PostCard from '../PostCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faImage, faXmark } from '@fortawesome/free-solid-svg-icons';
import BtnOptions from '../BtnOptions';
import { ChangeEvent, useEffect, useState } from 'react';
import Button from '../Button';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import configs from '~/configs';

const cx = classNames.bind(styles);

// interface PropsTypeCardTus {}

function CardTus() {
  const [toggleBtnSubmit, setToggleBtnSubmit] = useState<boolean>(true);
  const [valueTus, setValueTus] = useState<string>('');
  const [imageUploads, setImageUploads] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setImageUploads('https://heheheh.com');
    }, 3000);
  }, []);

  useEffect(() => {
    if (valueTus || imageUploads) {
      console.log('true ->');

      setToggleBtnSubmit(false);
    }
  }, [imageUploads, valueTus]);

  const handleGetValueTus = (e: ChangeEvent<HTMLInputElement>) => {
    setValueTus(e.target.value);
  };

  const handleSubmit = () => {
    console.log('value ->', valueTus);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-up-status')}>
        <div className={cx('heading')}>
          <Link to={configs.routes.author}>
            <img src="https://picsum.photos/200" alt="avatar" className={cx('avatar')} />
          </Link>
          <input onChange={handleGetValueTus} type="text" className={cx('input-tus')} placeholder="Hôm nay bạn thế nào ?" />
          <Button onClick={handleSubmit} disable={toggleBtnSubmit} className={cx('btn')} solid>
            Đăng
          </Button>
        </div>
        <div className={cx('body')}>
          {/* <div className={cx('box-img')}>
            <button className={cx('icon-close')}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
            <img src="https://picsum.photos/1920" alt="" />
          </div> */}
        </div>
        <div className={cx('footer')}>
          <BtnOptions id="1" icon={<FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>}>
            Thêm video
          </BtnOptions>
          <BtnOptions id="2" icon={<FontAwesomeIcon icon={faImage}></FontAwesomeIcon>}>
            Thêm ảnh
          </BtnOptions>
        </div>
      </div>

      <Row gutter={[16, 16]}>
        <Col span={24} lg={{ span: 24 }}>
          <PostCard
            title="hehe"
            dateTime="13/02/2022"
            desc="ehehehhehehehe"
            titleImg="Blog"
            userName="Lê Tài"
            image="https://picsum.photos/1920"
          ></PostCard>
        </Col>
      </Row>
    </div>
  );
}

export default CardTus;
