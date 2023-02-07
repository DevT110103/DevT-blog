import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './AdminControl.module.scss';
import { Link } from 'react-router-dom';
import configs from '~/configs';
import * as request from '~/utils/request';

const cx = classNames.bind(styles);

interface PropsTypeAdminControl {
  setCardsCategories: any;
}

function AdminControl({ setCardsCategories }: PropsTypeAdminControl) {
  const [valueSearch, setValueSearch] = useState<string>('');

  const handleGetValueSearch = (e: any) => {
    const value = e.target.value;

    setValueSearch(value);
  };

  const handleSearch = () => {
    request
      .get('categories/search', {
        params: {
          q: valueSearch,
        },
      })
      .then((res) => {
        setCardsCategories(res.data);
      });
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <div className={cx('search-box')}>
          <input
            type="text"
            className={cx('input')}
            placeholder="Nhập tên sản phẩm muốn tìm kiếm..."
            onChange={handleGetValueSearch}
          />
          <button className={cx('btn-search')} onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} className={cx('icon')}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <div className={cx('right')}>
        <Link to={configs.routes.addProduct} className={cx('btn')}>
          Create
        </Link>
      </div>
    </div>
  );
}

export default AdminControl;
