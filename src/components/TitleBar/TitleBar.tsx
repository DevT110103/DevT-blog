import classNames from 'classnames/bind';

import styles from './TitleBar.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  className?: string;
  children: string;
}

function TitleBar({ className = '', children }: PropsType) {
  return (
    <div
      className={cx('wrapper', {
        [className]: className,
      })}
    >
      <h2 className={cx('title')}>{children}</h2>
    </div>
  );
}

export default TitleBar;
