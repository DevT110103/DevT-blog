import classNames from 'classnames/bind';

import styles from './ProductDetail.module.scss';
import * as request from '~/utils/request';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import uuid from 'react-uuid';
import CardAdmin from '~/components/CardAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

interface PropsTypeProductDetail {}

interface Product {
  id: number;
  desc: string | undefined | null;
  createdAt: Date;
  updatedAt: Date;
  sub_title: string | undefined | null;
  thumbnail: string;
  title: string;
  category_name: string;
}

function ProductDetail({}: PropsTypeProductDetail) {
  const location = useLocation();
  const [testCard, setTestCard] = useState<Product[]>([]);
  const [nameCategory, setNameCategory] = useState<string>();

  useEffect(() => {
    request
      .get('categories/get-product', {
        params: {
          id: location.state.id,
        },
      })
      .then((res) => {
        const data = res.data as Product[];
        setTestCard(data);
        setNameCategory(data[0].category_name);
      });
  }, [location.state.id]);

  return (
    <div className={cx('wrapper')}>
      <h1>{nameCategory}</h1>
      <div className={cx('wrapper-body')}>
        {testCard.length <= 0 ? (
          <div className={cx('wrapper-empty')}>
            <FontAwesomeIcon className={cx('icon')} icon={faRectangleList}></FontAwesomeIcon>
            <h1 className={cx('empty')}>Empty</h1>
          </div>
        ) : (
          <Row gutter={[32, 32]}>
            {testCard.map((card) => {
              return (
                <Col key={uuid()} span={24} lg={{ span: 8 }}>
                  {card.title}
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
