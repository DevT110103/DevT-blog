import classNames from 'classnames/bind';

import styles from './CardTus.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeCardTus {}

function CardTus({}: PropsTypeCardTus) {
  return <div className={cx('wrapper')}>CardTus component</div>;
}

export default CardTus;
