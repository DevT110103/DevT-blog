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
  disable?: boolean;
}

function Button({ primary = true, solid, className = '', children, onClick, to = '#', disable }: PropsType) {
  const classes = cx('btn', {
    primary,
    solid,
    [className]: className,
    disable,
  });
  if (disable) {
    onClick = () => {
      return undefined;
    };
  }
  return (
    <div className={cx('wrapper')}>
      <button disabled={disable} className={classes} onClick={onClick}>
        <Link to={to} className={cx('content')}>
          {children}
        </Link>
      </button>
    </div>
  );
}

export default Button;
