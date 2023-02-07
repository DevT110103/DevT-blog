import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './AddProduct.module.scss';
import { Col, Row } from 'antd';
import CardAdmin from '~/components/CardAdmin';

const cx = classNames.bind(styles);

interface PropsTypeAddProduct {}

function AddProduct({}: PropsTypeAddProduct) {
  const [file, setFile] = useState<string>();

  const [title, setTitle] = useState<string>('');
  return (
    <div className={cx('wrapper')}>
      <Row gutter={[32, 32]}>
        <Col span={24} lg={{ span: 18 }}>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="file"
            onChange={(e) => {
              console.log('e ->', e.target.files);

              if (e.target.files) {
                setFile(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
        </Col>
        <Col span={24} lg={{ span: 6 }}>
          <div className={cx('hehe')}>
            <CardAdmin img={file || '/images/admin/4884785.jpg'} title={title}></CardAdmin>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AddProduct;
