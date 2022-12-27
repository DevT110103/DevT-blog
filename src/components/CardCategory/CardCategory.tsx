import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ModifierAmountCircle } from '../../interfaces';
import AmountCircle from '../AmountCircle';
import Loading from '../Loading';

import styles from './CardCategory.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeCardCategory extends ModifierAmountCircle {
  className?: string;
}

function CardCategory({ gettingStarted, technology, lifeStyle, places, health, className = '' }: PropsTypeCardCategory) {
  return (
    <div
      className={cx('wrapper', {
        [className]: className,
      })}
    >
      <img
        src="http://ghost.estudiopatagon.com/rein/content/images/size/w160h160/2019/07/austin-distel-M1aegHe2j6g-unsplash-1.jpg"
        alt=""
        className={cx('img')}
      />
      <Link to="/tag/@korean" className={cx('tag')}>
        Korean
      </Link>
      <AmountCircle gettingStarted className={cx('tag-amount')}>
        3
      </AmountCircle>
    </div>
  );
}

export default CardCategory;
