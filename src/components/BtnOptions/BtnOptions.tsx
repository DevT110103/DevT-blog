import classNames from 'classnames/bind';

import styles from './BtnOptions.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeBtnOptions {
  children: any;
  icon: React.ReactNode;
  id: string;
}

function BtnOptions({ children, icon, id }: PropsTypeBtnOptions) {
  return (
    <div className={cx('wrapper')}>
      <input id={id} type="file" className={cx('option-item')}></input>
      {icon}
      <label htmlFor={id} className={cx('text')}>
        {children}
      </label>
    </div>
  );
}

export default BtnOptions;
