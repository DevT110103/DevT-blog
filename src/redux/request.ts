import axios from 'axios';
import { loginFailed, loginStart, loginSuccess } from './AuthSlice';
import { NavigateFunction } from 'react-router-dom';

interface User {
  userName: string;
  password: string;
}

export const loginUser = async (user: User, dispatch: any, navigate: NavigateFunction) => {
  dispatch(loginStart());
  try {
    const res = axios.post('http://127.0.0.1:3001/api/v1/auth/login', user);
    dispatch(loginSuccess((await res).data));
    navigate('/');
  } catch (err) {
    dispatch(loginFailed());
  }
};
