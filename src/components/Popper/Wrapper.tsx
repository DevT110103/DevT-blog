import classNames from 'classnames/bind';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeWrapper {
  children: React.ReactNode;
}

function Wrapper({ children }: PropsTypeWrapper) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
