import classNames from 'classnames/bind';

import styles from './ProductCard.module.scss';
import product1 from '~/assets/images/product/1.png';
import { Link } from 'react-router-dom';
import configs from '~/configs';
const cx = classNames.bind(styles);

interface PropsTypeProductCard {}

function ProductCard({}: PropsTypeProductCard) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('top-card')}>
        <img src={product1} alt="" />
      </div>
      <div className={cx('mid-card')}>
        <h3 className={cx('title')}>
          <Link className={cx('link')} to={configs.routes.home}>
            Product 1
          </Link>
        </h3>
      </div>
      <div className={cx('bot-card')}>
        <p className={cx('desc')}>test test test test test test test test test testtesttesttesttesttesttest</p>
      </div>
    </div>
  );
}

export default ProductCard;
