import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  primary?: boolean;
  solid?: boolean;
  className?: string;
  children: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: string;
}

function Button({ primary = true, solid, className = '', children, onClick, to = '#' }: PropsType) {
  const classes = cx('btn', {
    primary,
    solid,
    [className]: className,
  });

  return (
    <div className={cx('wrapper')}>
      <button className={classes} onClick={onClick}>
        <Link to={to} className={cx('content')}>
          {children}
        </Link>
      </button>
    </div>
  );
}

export default Button;
