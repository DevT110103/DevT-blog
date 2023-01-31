import classNames from 'classnames/bind';

import styles from './Blog.module.scss';
import ProductCard from '~/components/ProductCard';
import { Col, Row } from 'antd';

const cx = classNames.bind(styles);

function Blog() {
  document.title = 'Blog page';

  return (
    <div className={cx('wrapper')}>
      <Row gutter={[32, 32]}>
        <Col span={24} lg={{ span: 6 }}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={24} lg={{ span: 6 }}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={24} lg={{ span: 6 }}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={24} lg={{ span: 6 }}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={24} lg={{ span: 6 }}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={24} lg={{ span: 6 }}>
          <ProductCard></ProductCard>
        </Col>
      </Row>
    </div>
  );
}

export default Blog;
