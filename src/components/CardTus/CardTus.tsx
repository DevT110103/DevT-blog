import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faImage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

import styles from './CardTus.module.scss';
import PostCard from '../PostCard';
import BtnOptions from '../BtnOptions';
import Button from '../Button';
import configs from '~/configs';
import { PropsTypePostCard } from '../PostCard/interfaces';
import ReactTextareaAutosize from 'react-textarea-autosize';
import WrapperHashTags from '../WrapperHashTags';

const cx = classNames.bind(styles);

const CARDS: PropsTypePostCard[] = [
  {
    id: uuid(),
    title: 'Test title 1',
    dateTime: '23/01/2003',
    desc: 'Test description 1',
    titleImg: 'Test',
    userName: 'Lê Tài',
    image: 'https://picsum.photos/1920',
  },
  {
    id: uuid(),
    title: 'Test title 2',
    dateTime: '23/01/2003',
    desc: 'Test description 2',
    titleImg: 'Test',
    userName: 'Lê Tài',
    image: 'https://picsum.photos/1920',
  },
  {
    id: uuid(),
    title: 'Test title 3',
    dateTime: '23/01/2003',
    desc: uuid(),
    titleImg: 'Test',
    userName: 'Lê Tài',
    image: 'https://picsum.photos/1920',
  },
];

// interface PropsTypeCardTus {}

function CardTus() {
  const currentUser = {};

  const [toggleBtnSubmit, setToggleBtnSubmit] = useState<boolean>(true);
  const [valueTus, setValueTus] = useState<string>('');
  const [imageUploads, setImageUploads] = useState<string>('');
  const [valueView, setValueView] = useState<string>('');

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

  const handleGetValueTus = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setValueView(value);
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
          <ReactTextareaAutosize
            minRows={1}
            maxRows={10}
            onChange={handleGetValueTus}
            className={cx('input-tus')}
            placeholder={
              Object.keys(currentUser).length === 0 && currentUser.constructor === Object
                ? 'Hãy viết gì đó'
                : 'Hôm nay bạn thế nào ?'
            }
          ></ReactTextareaAutosize>
          <Button onClick={handleSubmit} disable={toggleBtnSubmit} className={cx('btn')} solid>
            Đăng
          </Button>
        </div>
        <div className={cx('body')}>
          <WrapperHashTags>{valueView}</WrapperHashTags>
          <div className={cx('box-img')}>
            <button className={cx('icon-close')}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
            <img src="https://picsum.photos/1920" alt="" />
          </div>
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
          <Row gutter={[16, 16]}>
            {CARDS.map((card) => {
              return (
                <Col span={24} lg={{ span: 24 }}>
                  <PostCard
                    key={card.id}
                    title={card.title}
                    dateTime={card.dateTime}
                    desc={card.desc}
                    titleImg={card.titleImg}
                    userName={card.userName}
                    image={card.image}
                  ></PostCard>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default CardTus;
