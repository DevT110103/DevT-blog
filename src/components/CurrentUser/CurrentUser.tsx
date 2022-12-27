import classNames from 'classnames/bind';

import styles from './CurrentUser.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeCurrentUser {
  avatar?: string;
}

function CurrentUser({ avatar }: PropsTypeCurrentUser) {
  return (
    <div className={cx('wrapper')}>
      <img
        src={
          avatar ||
          'https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/306632179_1722751928124906_977109615881768505_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kRKr-Opt6mkAX8BQVRq&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfAuPtPDLWbxI-VySuVkhja0BCZAbzdTh29KLUoh2pdSRw&oe=63A07631'
        }
        alt=""
        className={cx('img')}
      />
    </div>
  );
}

export default CurrentUser;
