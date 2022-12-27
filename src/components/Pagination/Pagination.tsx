import classNames from 'classnames/bind';
import Button from '../Button';

import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  postPerPage: number;
  totalPost: number;
  paginate: Function;
}

function Pagination({ postPerPage, totalPost, paginate }: PropsType) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); ++i) {
    pageNumbers.push(i);
  }
  return (
    <div className={cx('wrapper')}>
      {pageNumbers.map((number, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              paginate(number);
            }}
            solid
            className={cx('btn')}
          >
            {number}
          </Button>
        );
      })}
    </div>
  );
}

export default Pagination;
