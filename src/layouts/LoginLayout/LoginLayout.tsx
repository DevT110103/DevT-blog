import classNames from 'classnames/bind';

import styles from './LoginLayout.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeLoginLayout {
  children: React.ReactNode;
}

function LoginLayout({ children }: PropsTypeLoginLayout) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default LoginLayout;
