import classNames from 'classnames/bind';
import uuid from 'react-uuid';
import { Col, Row } from 'antd';

import styles from './Admin.module.scss';
import CardAdmin from '~/components/CardAdmin';
import { useEffect, useState } from 'react';
import * as request from '~/utils/request';
import { useNavigate } from 'react-router-dom';
import configs from '~/configs';
import AdminControl from '~/components/AdminControl';

const cx = classNames.bind(styles);

function Admin() {
  document.title = 'Admin Page';
  const [cardsCategories, setCardsCategories] = useState<any>([]);

  const navigate = useNavigate();

  useEffect(() => {
    request.get('categories').then((res) => {
      setCardsCategories(res.data);
    });
  }, []);

  const handleNavigate = (id: any) => {
    navigate(configs.routes.productDetail, {
      state: {
        id: id,
      },
    });
  };

  return (
    <div className={cx('wrapper')}>
      <AdminControl setCardsCategories={setCardsCategories}></AdminControl>
      <Row gutter={[32, 32]}>
        {cardsCategories.map((card: any) => {
          return (
            <Col key={uuid()} span={24} lg={{ span: 6 }}>
              <div
                onClick={(e) => {
                  handleNavigate(card.id);
                }}
              >
                <CardAdmin img={card.thumbnail || '/images/admin/4884785.jpg'} title={card.name}></CardAdmin>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Admin;
