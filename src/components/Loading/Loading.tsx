import classNames from 'classnames/bind';

import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  children: React.ReactNode;
}

function Loading({ children }: PropsType) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default Loading;
