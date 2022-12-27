import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import Header from '../components/Header';

import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

interface PropsType {
  children: React.ReactNode;
}

function DefaultLayout(props: PropsType) {
  const { children } = props;

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('content')}>
        <div className="container">
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 24 }}>
              <div className={cx('content-inner')}>
                {children}
                <Footer></Footer>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
