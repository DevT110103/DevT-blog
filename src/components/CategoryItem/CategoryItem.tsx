import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import AmountCircle from '../AmountCircle';

import styles from './CategoryItem.module.scss';
import { PropsTypeTagItem } from './interfaces';

const cx = classNames.bind(styles);

function CategoryItem({ tag, amount, gettingStarted, technology, lifeStyle, places, health }: PropsTypeTagItem) {
  return (
    <div className={cx('wrapper')}>
      <Link to="/" className={cx('tag')}>
        {tag}
      </Link>
      <AmountCircle gettingStarted={gettingStarted} technology={technology} lifeStyle={lifeStyle} places={places} health={health}>
        {amount}
      </AmountCircle>
    </div>
  );
}

export default CategoryItem;
