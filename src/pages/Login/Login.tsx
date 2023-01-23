import classNames from 'classnames/bind';
import { ChangeEvent, ReactEventHandler, useState } from 'react';
import Button from '~/components/Button';

import styles from './Login.module.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import configs from '~/configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useDispatch } from 'react-redux';
import { loginUser } from '~/redux/request';

const cx = classNames.bind(styles);

function Login() {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [toggleLogin, setToggleLogin] = useState<boolean>(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setUserName(value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPassword(value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    const newUser = {
      userName,
      password,
    };
    loginUser(newUser, dispatch, navigate);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('back-home')}>
        <Tippy content="Back home" theme="blog-dev-t">
          <Link to={configs.routes.home}>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          </Link>
        </Tippy>
      </div>
      <input type="checkbox" readOnly id="chk" checked={toggleLogin} aria-hidden="true" className={cx('chk')} />
      <div className={cx('register')}>
        <div className={cx('form-group')}>
          <label
            className={cx('label')}
            onClick={() => {
              setToggleLogin(!toggleLogin);
            }}
            htmlFor="chk"
          >
            Register
          </label>
          <input type="text" name="firstName" id="firstName" className={cx('form-control')} placeholder="Họ và tên lót" />
          <input type="text" name="lastName" id="lastName" className={cx('form-control')} placeholder="Tên" />
          <input type="text" name="userName" id="r-userName" className={cx('form-control')} placeholder="Tên đăng nhập" />
          <input type="password" name="password" id="r-password" className={cx('form-control')} placeholder="Mật khẩu" />
          <Button className={cx('btn')}>Đăng ký</Button>
        </div>
      </div>
      <div className={cx('log-in')}>
        <div className={cx('form-group')}>
          <label
            className={cx('label')}
            onClick={() => {
              setToggleLogin(!toggleLogin);
            }}
            htmlFor="chk"
          >
            Log in
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className={cx('form-control')}
            placeholder="Tên đăng nhập"
            onChange={handleChangeUserName}
          />
          {isValid && <span className={cx('err-msg')}>Vui lòng nhập trường này</span>}
          <input
            type="password"
            name="password"
            id="password"
            className={cx('form-control')}
            placeholder="Mật khẩu"
            onChange={handleChangePassword}
          />
          <Button className={cx('btn')} onClick={handleSubmit}>
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
